// Haxball Bot - Devler vs Cüceler
// Kırmızı takım: 10 radius (Cüceler)
// Mavi takım: 32 radius (Devler)

var roomConfig = {
    roomName: "Devler vs Cüceler Gel",
    maxPlayers: 16,
    public: true,
    noPlayer: true,
    token: "BURAYA_TOKEN_GİR" // https://www.haxball.com/headlesstoken adresinden token alın
};

var room = HBInit(roomConfig);

// Takım boyutları
const RED_RADIUS = 10;  // Kırmızı takım (Cüceler)
const BLUE_RADIUS = 32; // Mavi takım (Devler)

// Her saniye oyuncu boyutlarını kontrol et ve güncelle
setInterval(() => {
    var players = room.getPlayerList();
    
    players.forEach(player => {
        if (player.team === 1) { // Kırmızı takım
            room.setPlayerDiscProperties(player.id, {radius: RED_RADIUS});
        } else if (player.team === 2) { // Mavi takım
            room.setPlayerDiscProperties(player.id, {radius: BLUE_RADIUS});
        }
    });
}, 1000); // Her 1000ms (1 saniye)

// Oyuncu takıma girdiğinde boyutunu ayarla
room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    if (changedPlayer.team === 1) { // Kırmızı takıma girdi
        room.setPlayerDiscProperties(changedPlayer.id, {radius: RED_RADIUS});
    } else if (changedPlayer.team === 2) { // Mavi takıma girdi
        room.setPlayerDiscProperties(changedPlayer.id, {radius: BLUE_RADIUS});
    }
};

// Admin auth
const ADMIN_AUTH = "BDJ_hdu9wSW4qxeZ5Jl5NUj8_uvi5E-OEykZGK79Kks";

// Oyuncu odaya girdiğinde mesaj gönder ve admin kontrol et
room.onPlayerJoin = function(player) {
    room.sendAnnouncement(
        "🔴 Kırmızı Takım (Cüceler): " + RED_RADIUS + " boyut\n" +
        "🔵 Mavi Takım (Devler): " + BLUE_RADIUS + " boyut",
        player.id,
        0x00FF00,
        "bold",
        2
    );
    
    // Admin kontrolü
    if (player.auth === ADMIN_AUTH) {
        room.setPlayerAdmin(player.id, true);
        room.sendAnnouncement("👑 Admin yetkisi verildi!", player.id, 0xFFD700);
    }
};

// Gol atıldığında boyutları koru
room.onTeamGoal = function(team) {
    setTimeout(() => {
        var players = room.getPlayerList();
        players.forEach(player => {
            if (player.team === 1) {
                room.setPlayerDiscProperties(player.id, {radius: RED_RADIUS, color: 0xFF0000});
            } else if (player.team === 2) {
                room.setPlayerDiscProperties(player.id, {radius: BLUE_RADIUS, color: 0x0000FF});
            }
        });
    }, 100);
};

// Oyun başladığında boyutları ayarla
room.onGameStart = function(byPlayer) {
    var players = room.getPlayerList();
    players.forEach(player => {
        if (player.team === 1) {
            room.setPlayerDiscProperties(player.id, {radius: RED_RADIUS, color: 0xFF0000});
        } else if (player.team === 2) {
            room.setPlayerDiscProperties(player.id, {radius: BLUE_RADIUS, color: 0x0000FF});
        }
    });
};

console.log("Bot başlatıldı: Devler vs Cüceler");
