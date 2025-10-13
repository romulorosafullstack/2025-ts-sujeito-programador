"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log('White:', DesignColors.white);
var StatusPermission1;
(function (StatusPermission1) {
    StatusPermission1[StatusPermission1["Admin"] = 0] = "Admin";
    StatusPermission1[StatusPermission1["User"] = 1] = "User";
})(StatusPermission1 || (StatusPermission1 = {}));
console.log('Admin:', StatusPermission1.Admin);
console.log('User:', StatusPermission1.User);
var StatusOficina;
(function (StatusOficina) {
    StatusOficina[StatusOficina["Entrada"] = 1] = "Entrada";
    StatusOficina[StatusOficina["Revisao"] = 2] = "Revisao";
    StatusOficina[StatusOficina["Saida"] = 3] = "Saida";
    StatusOficina[StatusOficina["Calote"] = 0] = "Calote";
})(StatusOficina || (StatusOficina = {}));
console.log('Calote:', StatusOficina.Calote);
console.log('Saida:', StatusOficina.Saida);
