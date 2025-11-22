// HAXBALL V4 FUTSAL BOT - QATAR MAP + GOL EFEKTLERİ - BY SPY 
// =============================================================================

var roomConfig = {
    roomName: "Futsal V4 Qatar YS",
    maxPlayers: 12,
    public: true,
    noPlayer: true,
    geo: { code: "tr", lat: 37.143680, lon: 31.506040 } 
};

var room = HBInit(roomConfig);

// =============================================================================
// MAP
// =============================================================================

var qatarMapOriginal = '{"name":"Qatar 4v4 by 𝙎𝙥𝙮","width":850,"height":350,"spawnDistance":120,"bg":{"type":"hockey","height":0,"width":0,"color":"718C5A"},"canBeStored":true,"redSpawnPoints":[[-530,0],[-135,90],[-135,-90],[-285,0],[-765,0]],"blueSpawnPoints":[[530,0],[135,90],[135,-90],[285,0],[765,0]],"vertexes":[{"x":-700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":91,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":-701,"y":320,"trait":"linha","color":"111129"},{"x":701,"y":320,"trait":"linha","color":"111129"},{"x":700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":700,"y":90,"trait":"linha","pos":[550,80],"color":"ECE1FF"},{"x":700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":701,"y":-320,"trait":"linha","color":"111129"},{"x":-701,"y":-320,"trait":"linha","color":"111129"},{"x":-700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","pos":[550,80],"color":"ECE1FF","bias":10},{"x":751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":-698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-90,"trait":"parede","bias":40},{"x":698,"y":-318,"trait":"parede","bias":40,"color":"969EA8"},{"x":-698,"y":-318,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":-90,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":91,"trait":"parede","bias":40},{"x":-698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":90,"trait":"parede","pos":[550,80],"bias":49},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-90,"trait":"linha","color":"F2F2F2"},{"x":0,"y":90,"trait":"linha","color":"F2F2F2"},{"x":460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-698,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-698,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-400,"y":-90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":-400,"y":90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":400,"y":-90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":400,"y":90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":-460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":-1,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","vis":false},{"x":-1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D4AC0D","vis":false},{"x":-1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":-701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":-735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.83,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.83,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":749.33,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":749.33,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":-700,"y":-318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":-700,"y":318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":700,"y":-318.5,"trait":"linha","curve":90,"color":"717171"},{"x":700,"y":318.5,"trait":"linha","curve":90,"color":"717171"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":183,"color":"B7950B"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-183,"color":"9A7D0A"},{"x":17.295238095238094,"y":36.16743655553608,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":21.551373210999365,"y":48.12766794079051,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":0.5660714285714286,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15.383333333333333,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.102478214627542,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":2,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":-21.74086163608197,"y":48.27370507261451,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":21.54954361725646,"y":47.909936501464415,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":17.295238095238094,"y":36.16380975024047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":27.810714285714283,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":-12.854335266350585,"y":-12.785992361468388,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":20.646695734237582,"y":18.72353377237919,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":-20.7,"y":-1,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"D4AC0D"},{"x":4.295238095238094,"y":22.66018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"FBE37D"},{"x":-16.830123078763606,"y":27.74832340614142,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":-6.164304831809051,"y":12.851915399576606,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":2.372740790737518,"y":1.4573444487073814,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":10.485495563396794,"y":-9.06267393956184,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":-25.722619047619045,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":-15.397863070978943,"y":45.452173924909616,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":45.47190021098944,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.408806827001182,"y":44.1498084355034,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":44.16953472158321,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.419750583023422,"y":42.847442946097196,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":42.86716923217701,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":186,"color":"B7950B"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":-186,"color":"9A7D0A"},{"x":0.2642600740769898,"y":11.850186460422716,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":12.569655515726534,"y":23.407815279689217,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.261486141718102,"y":-6.9025175039976805,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-8.295361950462208,"y":0.22459110903362767,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-13.906089320814594,"y":-60.899200244591924,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-0.9390786571882304,"y":-45.174752338000204,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":16.09441099435831,"y":-60.71580033398497,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":13.64746395714984,"y":-43.71098723477586,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":19.975892420101196,"y":-36.21768810523994,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":-5.205509720938451,"y":-33.803447422514985,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":1.2021182442966682,"y":-23.54296828697071,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-4.928111606234725,"y":-19.820494317872292,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-5.493193725093485,"y":-10.017139340254602,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":15.219214152997544,"y":-25.355698049863857,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":22.011512086907548,"y":-15.764513541219038,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":-27.191417131645604,"y":-40.97260383420401,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-12.6148625342372,"y":-44.21612804371298,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-17.767192914900857,"y":-24.800406793140944,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","curve":40},{"x":-25.056487561941317,"y":-26.61925393006127,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-15.3869193149567,"y":46.75453941431583,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":46.77426570039565,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.375975558934456,"y":48.056904903722035,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":48.07663118980186,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-16.007125457791304,"y":48.791666295546165,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"F1C40F"},{"x":15.383333333333333,"y":48.5219780284246,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"FBE37D"},{"x":-27.4,"y":-33.136689888661664,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"C8A510"},{"x":-15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":-16.325330104189707,"y":36.45395417388959,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-21.8033987623963,"y":51.104939144912876,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":24.491789091335683,"y":-18.29674412536515,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":14.428613802880756,"y":12.533708897020562,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":-1.6535977641211121,"y":26.62280891272379,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":9.841760996090423,"y":36.96311178650215,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":-12.175163916413917,"y":31.046867620871236,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":-9.905765263704826,"y":41.23125159715103,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":27.810714285714283,"y":59.44523809523809,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-16.738643391619767,"y":38.63489537244617,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-25.722619047619045,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-6.2,"y":12,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":16.795238095238094,"y":34.16018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":31.2,"y":-33.6,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"}],"segments":[{"v0":0,"v1":1,"color":"ECE1FF","trait":"linha","x":-700},{"v0":2,"v1":3,"color":"ECE1FF","trait":"linha","x":-700},{"v0":6,"v1":7,"color":"ECE1FF","trait":"linha","x":700},{"v0":8,"v1":9,"color":"ECE1FF","trait":"linha","x":700},{"v0":12,"v1":13,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":14,"v1":15,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":-750},{"v0":16,"v1":17,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":18,"v1":19,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":20,"v1":21,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":750},{"v0":22,"v1":23,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":24,"v1":25,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":25,"v1":26,"curve":180,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":26,"v1":25,"curve":180,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":26,"v1":27,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":28,"v1":29,"curve":0,"color":"ECE1FF","trait":"linha","y":-150},{"v0":30,"v1":31,"curve":0,"color":"ECE1FF","trait":"linha","y":150},{"v0":32,"v1":33,"color":"969EA8","trait":"parede","bias":40,"x":698},{"v0":33,"v1":34,"color":"969EA8","trait":"parede","bias":40,"y":-318},{"v0":34,"v1":35,"color":"ECE1FF","trait":"parede","bias":40,"x":-698},{"v0":36,"v1":37,"color":"969EA8","trait":"parede","bias":40,"x":-698},{"v0":37,"v1":38,"color":"111129","trait":"parede","bias":40,"y":318},{"v0":38,"v1":39,"color":"969EA8","trait":"parede","bias":49,"x":698},{"v0":40,"v1":41,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":42,"v1":43,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":46,"v1":47,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":47,"v1":46,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":48,"v1":49,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":49,"v1":48,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":51,"v1":52,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":53,"v1":54,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":55,"v1":56,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":57,"v1":58,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":59,"v1":60,"bCoef":0,"trait":"rede2","bias":20,"y":-86.25},{"v0":60,"v1":61,"bCoef":0,"trait":"rede2","bias":40,"x":-606.25},{"v0":61,"v1":62,"bCoef":0,"trait":"rede2","bias":20,"y":86.25},{"v0":63,"v1":64,"trait":"rede2","bias":20,"y":86.25},{"v0":64,"v1":65,"trait":"rede2","bias":40,"x":606.25},{"v0":65,"v1":66,"trait":"rede2","bias":20,"y":-86.25},{"v0":67,"v1":68,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-601.5},{"v0":69,"v1":70,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":601.5},{"v0":71,"v1":72,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":73,"v1":74,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":75,"v1":76,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":77,"v1":78,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":79,"v1":80,"curve":0,"color":"AAB7B8","trait":"linha","y":150},{"v0":81,"v1":82,"curve":0,"color":"AAB7B8","trait":"linha","y":150,"x":700},{"v0":83,"v1":84,"curve":90,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":85,"v1":86,"curve":-90,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":87,"v1":88,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":88,"v1":87,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":89,"v1":90,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":90,"v1":89,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":92,"v1":93,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":94,"v1":95,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":97,"v1":96,"curve":177,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":98,"v1":99,"curve":177,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":100,"v1":101,"curve":0,"color":"ECE1FF","trait":"linha","y":320},{"v0":102,"v1":103,"curve":0,"color":"ECE1FF","trait":"linha","y":-320},{"v0":104,"v1":105,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":106,"v1":107,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":108,"v1":109,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":110,"v1":111,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":112,"v1":113,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":114,"v1":115,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":116,"v1":117,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":118,"v1":119,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":120,"v1":121,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":122,"v1":123,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":124,"v1":125,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":126,"v1":127,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":128,"v1":129,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":130,"v1":131,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":132,"v1":133,"curve":-90,"color":"717171","trait":"linha","y":150,"x":-700},{"v0":134,"v1":135,"curve":90,"color":"717171","trait":"linha","y":150,"x":700},{"v0":138,"v1":139,"color":"FBE37D","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":140,"v1":141,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"curve":-10,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":146,"v1":147,"curve":0,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":148,"v1":149,"curve":-5,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":151,"curve":9,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":153,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":154,"v1":155,"curve":9.971862000782721,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":-30.255631412293944,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":158,"v1":159,"curve":-35.344670176935146,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":66},{"v0":160,"v1":161,"curve":-35.34467017693518,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":63},{"v0":162,"v1":163,"curve":-35.34467017693502,"color":"1E8449","cMask":["wall"],"cGroup":["wall"],"y":60},{"v0":166,"v1":167,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":20,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":170,"v1":171,"curve":19.980617854376742,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":172,"v1":173,"curve":19.825378294386724,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":173,"v1":174,"curve":20.095207626974666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":171,"v1":175,"curve":19.83082240294392,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":175,"v1":176,"curve":19.870013082058666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":176,"v1":177,"curve":20.056605062337646,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":177,"v1":178,"curve":19.824043161727953,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":174,"v1":179,"curve":19.87890896829948,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":179,"v1":180,"curve":19.968942406277453,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":181,"v1":182,"curve":40.25099341278321,"vis":true,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":182,"v1":183,"curve":39.6593065347139,"vis":true,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":183,"v1":184,"curve":30.257096492338828,"vis":true,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":185,"v1":186,"curve":-35.34467017693512,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":69},{"v0":187,"v1":188,"curve":-35.34467017693499,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":72},{"v0":189,"v1":190,"curve":-36,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":75},{"v0":191,"v1":192,"curve":10,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":194,"curve":-185,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":195,"v1":196,"curve":-187,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":197,"v1":198,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":199,"v1":200,"curve":-6,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":201,"v1":202,"curve":25,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":203,"v1":204,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":205,"v1":206,"curve":-30.255631412293944,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":207,"v1":208,"curve":65,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"y":48},{"v0":209,"v1":210,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":211,"v1":212,"curve":-2,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":213,"v1":214,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":215,"v1":216,"curve":187,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":217,"v1":218,"curve":185,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245}],"goals":[{"p0":[-708.25,-90],"p1":[-708.25,90],"team":"red"},{"p0":[708.25,90],"p1":[708.25,-90],"team":"blue"}],"discs":[{"radius":6.25,"invMass":1.5,"pos":[0,0],"color":"ffffff","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"pos":[-700,90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[-700,-90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[700,90],"color":"247BE3","trait":"traveBlue"},{"radius":5,"pos":[700,-90],"color":"247BE3","trait":"traveBlue"},{"pos":[-700,320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[-700,-320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[700,320],"color":"969EA8","trait":"bandeiraBlue"},{"pos":[700,-320],"color":"969EA8","trait":"bandeiraBlue"},{"radius":0,"invMass":0,"pos":[-900,400],"color":"FF0000","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"FF0000","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"FF0000","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"FF0000","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"FF0000","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"FF0000","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"0000FF","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"0000FF","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"0000FF","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"0000FF","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"0000FF","cMask":[],"cGroup":[]},{"radius":0,"invMass":0,"pos":[-900,400],"color":"0000FF","cMask":[],"cGroup":[]}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8"},{"normal":[1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8"},{"normal":[0,-1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8"},{"normal":[-1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8"}],"traits":{"rede":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"F2F2F2"},"rede2":{"vis":false,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},"parede":{"vis":false,"bCoef":1,"cMask":["ball"],"bias":10},"traveRed":{"radius":6,"invMass":0,"bCoef":0.5,"color":"E18977"},"traveBlue":{"radius":6,"invMass":0,"bCoef":0.5,"color":"85ACF3"},"bandeiraRed":{"radius":3,"color":"E18977","cMask":[""]},"bandeiraBlue":{"radius":3,"color":"85ACF3","cMask":[""]},"linha":{"cMask":[""],"color":"F2F2F2"}},"ballPhysics":"disc0","playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.95}}';// =============================================================================


// =============================================================================
// CONFIG
// =============================================================================

var config = {
    masterAuth: "ivvmktPRfHs-g4PcmbdWuQ8NB0K4gG5lafxTz_cawRM",
    adminAuth: "zAPJ44NRbKRzzNaaTN15DVN-OL_Q8mBKRWoKzGLRxwk",
    maxPlayersPerTeam: 4,
    githubLink: "https://github.com/FurkanWqey/haxball-bot-futsal-/tree/main"
};

var specQueue = [];
var gameInProgress = false;
var winnerTeam = null;
var chooseMode = false;
var removingPlayers = false;

var colors = {
    spec: 0x9CA3AF,
    red: 0xFF3B3B,
    blue: 0x0080FF,
    bot: 0xFFC107,
    success: 0x4CAF50,
    warning: 0xFF9800
};

// =============================================================================
// GOL EFEKTLERİ DEĞİŞKENLERİ
// =============================================================================

var lastPlayersTouched = [null, null];
var lastTeamTouched = 0;
var activePlay = false;
const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var previousEffectChoice = -1;

const EFFECT_DISC_START = 9;
const EFFECT_DISC_COUNT = 12;

// =============================================================================
// TEMEL FONKSİYONLAR
// =============================================================================

function msg(text, color, target) {
    if (color === undefined) color = colors.bot;
    if (target === undefined) target = null;
    room.sendAnnouncement(text, target, color, "bold", target ? 0 : 1);
}

function getTeam(teamId) {
    return room.getPlayerList().filter(function(p) { return p.team === teamId; });
}

function updateQueue() {
    var specs = getTeam(0);
    specQueue = specs.map(function(p, i) {
        return { id: p.id, name: p.name, position: i + 1 };
    });
}

function showQueue(targetId) {
    updateQueue();
    if (specQueue.length === 0) {
        msg("📋 Spec listesi boş.", colors.bot, targetId);
        return;
    }
    var queueText = "📋 Spec Sırası: ";
    specQueue.forEach(function(p, i) {
        queueText += (i + 1) + "." + p.name;
        if (i < specQueue.length - 1) queueText += " | ";
    });
    msg(queueText, colors.bot, targetId);
}

function activateChooseMode() {
    chooseMode = true;
    msg("🎯 Seçim modu aktif!", colors.success);
}

function deactivateChooseMode() {
    chooseMode = false;
    msg("✅ Seçim modu kapatıldı.", colors.success);
}

function canTeamPick(teamId) {
    return getTeam(teamId).length < config.maxPlayersPerTeam;
}

function pickPlayer(position, callerTeam, callerName) {
    if (!chooseMode) {
        msg("⚠️ Şu anda seçim aktif değil!", colors.warning);
        return false;
    }
    
    var choosingTeam = winnerTeam === 1 ? 2 : 1;
    if (callerTeam !== choosingTeam) {
        msg("⚠️ Sadece kaybeden takım oyuncu seçebilir!", colors.warning);
        return false;
    }
    
    updateQueue();
    
    if (position < 1 || position > specQueue.length) {
        msg("⚠️ Geçersiz sıra! (1-" + specQueue.length + " arası seçebilirsiniz)", colors.warning);
        return false;
    }
    
    if (!canTeamPick(callerTeam)) {
        msg("⚠️ Takımınız zaten dolu! (" + getTeam(callerTeam).length + "/" + config.maxPlayersPerTeam + ")", colors.warning);
        return false;
    }
    
    var selected = specQueue[position - 1];
    room.setPlayerTeam(selected.id, callerTeam);
    
    var teamColor = callerTeam === 1 ? colors.red : colors.blue;
    var teamName = callerTeam === 1 ? "KIRMIZI" : "MAVİ";
    
    msg("✅ " + selected.name + " → " + teamName + " takıma alındı! (Seçen: " + callerName + ")", teamColor);
    
    return true;
}

function pickRandom(callerTeam, callerName) {
    if (!chooseMode) return false;
    
    var choosingTeam = winnerTeam === 1 ? 2 : 1;
    if (callerTeam !== choosingTeam) return false;
    
    updateQueue();
    
    if (specQueue.length === 0) {
        msg("⚠️ Spec'te oyuncu kalmadı!", colors.warning);
        return false;
    }
    
    if (!canTeamPick(callerTeam)) return false;
    
    var randomIndex = Math.floor(Math.random() * specQueue.length);
    var selected = specQueue[randomIndex];
    
    room.setPlayerTeam(selected.id, callerTeam);
    
    var teamColor = callerTeam === 1 ? colors.red : colors.blue;
    var teamName = callerTeam === 1 ? "KIRMIZI" : "MAVİ";
    
    msg("🎲 " + selected.name + " → Rastgele " + teamName + " takıma alındı! (Seçen: " + callerName + ")", teamColor);
    
    return true;
}

function pickTop(callerTeam, callerName) { 
    if (!chooseMode) return false;
    var choosingTeam = winnerTeam === 1 ? 2 : 1;
    if (callerTeam !== choosingTeam) return false;
    return pickPlayer(1, callerTeam, callerName); 
}

function pickBottom(callerTeam, callerName) { 
    if (!chooseMode) return false;
    var choosingTeam = winnerTeam === 1 ? 2 : 1;
    if (callerTeam !== choosingTeam) return false;
    updateQueue(); 
    return specQueue.length > 0 ? pickPlayer(specQueue.length, callerTeam, callerName) : false; 
}

function choosePlayer() {
    if (!chooseMode) return;
    
    updateQueue();
    
    var redCount = getTeam(1).length;
    var blueCount = getTeam(2).length;
    
    if (redCount === config.maxPlayersPerTeam && blueCount === config.maxPlayersPerTeam) {
        deactivateChooseMode();
        msg("✅ Takımlar tam! (4v4) Oyun başlıyor...", colors.success);
        setTimeout(function() { room.startGame(); }, 2000);
        return;
    }
    
    if (specQueue.length === 0) {
        msg("⏳ Spec'te oyuncu bekleniyor...", colors.warning);
        return;
    }
    
    var choosingTeam = winnerTeam === 1 ? 2 : 1;
    var teamName = choosingTeam === 1 ? "KIRMIZI" : "MAVİ";
    var teamColor = choosingTeam === 1 ? colors.red : colors.blue;
    
    msg("═══════════════════════════════════", colors.bot);
    msg((choosingTeam === 1 ? "🔴 " : "🔵 ") + teamName + " TAKIM OYUNCU SEÇİYOR", teamColor);
    msg("Takım Durumu: 🔴 " + redCount + "/4 | 🔵 " + blueCount + "/4", colors.bot);
    msg("═══════════════════════════════════", colors.bot);
    
    getTeam(choosingTeam).forEach(function(p) {
        showQueue(p.id);
        msg("💡 Seçim: 1, 2, 3... | random | top | bottom", colors.success, p.id);
    });
}

// =============================================================================
// GOL EFEKTLERİ 
// =============================================================================

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function getLastTouchOfTheBall() {
    var ball = room.getBallPosition();
    var players = room.getPlayerList().filter(function(p) { return p.team !== 0; });
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            if (pointDistance(players[i].position, ball) < triggerDistance) {
                activePlay = true;
                if (lastPlayersTouched[0] == null || lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function teleportDiscs() {
    var ball = room.getBallPosition();
    var goalX = ball.x < 0 ? -700 : 700;
    
    room.setDiscProperties(9, { x: goalX, y: -90, xspeed: 2, yspeed: 1, radius: 5, color: 0xFE4141 });
    room.setDiscProperties(10, { x: goalX, y: -90, xspeed: -2, yspeed: 2, radius: 5, color: 0xFF6B6B });
    room.setDiscProperties(11, { x: goalX, y: -90, xspeed: 1, yspeed: -1, radius: 5, color: 0xFFD700 });
    room.setDiscProperties(12, { x: goalX, y: -90, xspeed: -1, yspeed: 3, radius: 5, color: 0xFFA500 });
    room.setDiscProperties(13, { x: goalX, y: -90, xspeed: 3, yspeed: 0, radius: 5, color: 0xFF4500 });
    room.setDiscProperties(14, { x: goalX, y: -90, xspeed: -3, yspeed: 1, radius: 5, color: 0xDC143C });
    
    room.setDiscProperties(15, { x: goalX, y: 90, xspeed: 2, yspeed: -1, radius: 5, color: 0x4169E1 });
    room.setDiscProperties(16, { x: goalX, y: 90, xspeed: -2, yspeed: -2, radius: 5, color: 0x00BFFF });
    room.setDiscProperties(17, { x: goalX, y: 90, xspeed: 1, yspeed: 1, radius: 5, color: 0x1E90FF });
    room.setDiscProperties(18, { x: goalX, y: 90, xspeed: -1, yspeed: -3, radius: 5, color: 0x00CED1 });
    room.setDiscProperties(19, { x: goalX, y: 90, xspeed: 3, yspeed: 0, radius: 5, color: 0x7B68EE });
    room.setDiscProperties(20, { x: goalX, y: 90, xspeed: -3, yspeed: -1, radius: 5, color: 0x6495ED });
}

function teleportDiscsFire() {
    if (lastPlayersTouched[0] == null || lastPlayersTouched[0].team === 0) return;
    var playerDisc = room.getPlayerDiscProperties(lastPlayersTouched[0].id);
    if (playerDisc == null) return;
    
    var discColor = lastPlayersTouched[0].team === 1 ? 0xFE4141 : 0x4169E1;
    var speed = 8;
    
    for (var i = 0; i < EFFECT_DISC_COUNT; i++) {
        var angle = (2 * Math.PI / EFFECT_DISC_COUNT) * i;
        room.setDiscProperties(EFFECT_DISC_START + i, {
            x: playerDisc.x,
            y: playerDisc.y,
            xspeed: speed * Math.cos(angle),
            yspeed: speed * Math.sin(angle),
            radius: 5,
            color: discColor
        });
    }
}

function resetDiscs() {
    for (var i = 0; i < EFFECT_DISC_COUNT; i++) {
        room.setDiscProperties(EFFECT_DISC_START + i, { x: -900, y: 400, xspeed: 0, yspeed: 0, radius: 0 });
    }
}

function avatarCelebration(playerId, av1, av2) {
    var count = 0;
    var interval = setInterval(function() {
        room.setPlayerAvatar(playerId, count % 2 === 0 ? av1 : av2);
        count++;
        if (count >= 8) {
            clearInterval(interval);
            room.setPlayerAvatar(playerId, null);
        }
    }, 200);
}

// =============================================================================
// EVENT HANDLERS
// =============================================================================

room.onPlayerJoin = function(player) {
    if (player.auth === config.masterAuth) {
        room.setPlayerAdmin(player.id, true);
        msg("Merhaba kralım!", colors.success, player.id);
    }
    else if (config.adminAuth !== "" && player.auth === config.adminAuth) {
        room.setPlayerAdmin(player.id, true);
        msg("👑 Admin yetkisi verildi!", colors.success, player.id);
    }
    
    msg("👋 Hoş geldin " + player.name, colors.bot, player.id);
    msg("💻 Bot kodlarına ulaşmak için !github yazabilirsiniz", colors.success, player.id);
    
    setTimeout(updateQueue, 300);
};

room.onPlayerLeave = function(player) { 
    updateQueue(); 
};

room.onPlayerChat = function(player, message) {
    var p = room.getPlayer(player.id);
    if (!p) return false;
    var msgLower = message.toLowerCase().trim();
    
    if (msgLower === "!github" || msgLower === "github") {
        msg("═══════════════════════════════════", colors.bot, p.id);
        msg("📂 BOT KAYNAK KODU", colors.success, p.id);
        msg("🔗 " + config.githubLink, 0x00FF00, p.id);
        msg("═══════════════════════════════════", colors.bot, p.id);
        return false;
    }
    
    // SEÇİM MODU KOMUTLARI
    if (chooseMode && p.team !== 0) {
        var choosingTeam = winnerTeam === 1 ? 2 : 1;
        
        if (p.team === choosingTeam) {
            
            if (/^\d+$/.test(message)) {
                var num = parseInt(message);
                var result = pickPlayer(num, p.team, p.name);
                if (result) {
                    setTimeout(function() {
                        if (chooseMode) choosePlayer();
                    }, 300);
                }
                return false;
            }
            
            if (msgLower === "random" || msgLower === "rand") {
                var result = pickRandom(p.team, p.name);
                if (result) {
                    setTimeout(function() {
                        if (chooseMode) choosePlayer();
                    }, 300);
                }
                return false;
            }
            
            if (msgLower === "top" || msgLower === "auto") {
                var result = pickTop(p.team, p.name);
                if (result) {
                    setTimeout(function() {
                        if (chooseMode) choosePlayer();
                    }, 300);
                }
                return false;
            }
            
            if (msgLower === "bottom" || msgLower === "bot") {
                var result = pickBottom(p.team, p.name);
                if (result) {
                    setTimeout(function() {
                        if (chooseMode) choosePlayer();
                    }, 300);
                }
                return false;
            }
        } else {
            msg("⚠️ Şu anda sadece " + (choosingTeam === 1 ? "KIRMIZI" : "MAVİ") + " takım oyuncu seçebilir!", colors.warning, p.id);
            return false;
        }
    }
    
    if (msgLower === "q" || msgLower === "sira") {
        showQueue(p.id);
        return false;
    }
    
    var chatColor = p.team === 1 ? colors.red : (p.team === 2 ? colors.blue : colors.spec);
    room.sendAnnouncement(p.name + ": " + message, null, chatColor, "normal", p.team !== 0 ? 1 : 0);
    return false;
};

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    setTimeout(function() { 
        updateQueue(); 
    }, 100);
};

room.onGameStart = function(byPlayer) {
    gameInProgress = true;
    chooseMode = false;
    activePlay = false;
    lastPlayersTouched = [null, null];
    msg("⚽ İyi oyunlar!", colors.success);
};

room.onGameStop = function(byPlayer) {
    gameInProgress = false;
    
    var scores = room.getScores();
    
    if (!scores || scores.red === scores.blue) {
        msg("🤝 Maç berabere bitti! (" + scores.red + " - " + scores.blue + ")", colors.warning);
        chooseMode = false;
        return;
    }
    
    var losingTeam = scores.red > scores.blue ? 2 : 1;
    winnerTeam = scores.red > scores.blue ? 1 : 2;
    
    msg("═══════════════════════════════════", colors.success);
    msg("⚽ MAÇ BİTTİ!", colors.bot);
    msg("Skor: " + scores.red + " - " + scores.blue, colors.spec);
    msg((winnerTeam === 1 ? "🔴 KIRMIZI" : "🔵 MAVİ") + " TAKIM KAZANDI!", winnerTeam === 1 ? colors.red : colors.blue);
    msg("═══════════════════════════════════", colors.success);
    
    setTimeout(function() {
        removingPlayers = true;
        
        var losingPlayers = getTeam(losingTeam);
        var teamName = losingTeam === 1 ? "KIRMIZI" : "MAVİ";
        
        losingPlayers.forEach(function(p) { 
            room.setPlayerTeam(p.id, 0); 
        });
        
        msg("🔄 " + teamName + " takım spec'e alındı.", colors.warning);
        
        setTimeout(function() {
            removingPlayers = false;
            updateQueue();
            
            var addedCount = 0;
            while (getTeam(losingTeam).length < config.maxPlayersPerTeam && specQueue.length > 0) {
                updateQueue();
                var firstSpec = specQueue[0];
                room.setPlayerTeam(firstSpec.id, losingTeam);
                addedCount++;
            }
            
            if (addedCount > 0) {
                var teamName2 = losingTeam === 1 ? "KIRMIZI" : "MAVİ";
                msg("✅ " + addedCount + " oyuncu " + teamName2 + " takıma eklendi!", colors.success);
            }
            
            setTimeout(function() {
                var redCount = getTeam(1).length;
                var blueCount = getTeam(2).length;
                
                if (redCount === config.maxPlayersPerTeam && blueCount === config.maxPlayersPerTeam) {
                    msg("✅ Takımlar tam! (4v4) Oyun başlıyor...", colors.success);
                    setTimeout(function() { 
                        room.startGame(); 
                    }, 2000);
                } else {
                    activateChooseMode();
                    choosePlayer();
                }
            }, 500);
            
        }, 1500);
        
    }, 2000);
};

room.onPlayerBallKick = function(player) {
    activePlay = true;
    lastTeamTouched = player.team;
    if (lastPlayersTouched[0] == null || lastPlayersTouched[0].id != player.id) {
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
};

room.onTeamGoal = function(team) {
    previousEffectChoice = previousEffectChoice === 0 ? 1 : 0;
    if (previousEffectChoice === 0) {
        teleportDiscs();
    } else {
        teleportDiscsFire();
    }
    setTimeout(resetDiscs, 2000);
    
    var scores = room.getScores();
    var teamColor = team === 1 ? colors.red : colors.blue;
    
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team === team) {
        var scorer = lastPlayersTouched[0];
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team === team) {
            msg("⚽ GOL! " + scorer.name + " (Asist: " + lastPlayersTouched[1].name + ") | " + scores.red + " - " + scores.blue, teamColor);
            avatarCelebration(lastPlayersTouched[1].id, "🤝", "👟");
        } else {
            msg("⚽ GOL! " + scorer.name + " | " + scores.red + " - " + scores.blue, teamColor);
        }
        avatarCelebration(scorer.id, "⚽", "🎯");
    } else if (lastPlayersTouched[0] != null) {
        msg("😅 KENDİ KALESİNE! " + lastPlayersTouched[0].name + " | " + scores.red + " - " + scores.blue, colors.warning);
        avatarCelebration(lastPlayersTouched[0].id, "🤦", "🤡");
    }
};

room.onPositionsReset = function() { 
    lastPlayersTouched = [null, null]; 
    activePlay = false; 
};

room.onGameTick = function() { 
    if (gameInProgress) getLastTouchOfTheBall(); 
};

// =============================================================================
// BAŞLATMA
// =============================================================================

room.setCustomStadium(qatarMapOriginal);

setTimeout(function() {
    room.setTeamColors(1, 60, 0xFFFFFF, [0xFF3B3B, 0x771313, 0x330A0A]);
    room.setTeamColors(2, 60, 0xFFFFFF, [0x0080FF, 0x004077, 0x002033]);
    msg("🎨 Formalar ayarlandı!", colors.success);
    msg("🎮 Bot aktif! Gol efektleri açık!", colors.bot);
}, 1000);
