"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFF";
    DesignColors["black"] = "#000";
})(DesignColors || (DesignColors = {}));
console.log(`White: ${DesignColors.white}`);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["Admin"] = 0] = "Admin";
    StatusPermission[StatusPermission["User"] = 1] = "User";
    StatusPermission[StatusPermission["Support"] = 2] = "Support";
})(StatusPermission || (StatusPermission = {}));
console.log('StatusPermission - Admin:', StatusPermission.Admin);
console.log('StatusPermission - User:', StatusPermission.User);
console.log('StatusPermission - Support:', StatusPermission.Support);
var StatusOficina;
(function (StatusOficina) {
    StatusOficina[StatusOficina["Entrada"] = 1] = "Entrada";
    StatusOficina[StatusOficina["Revisao"] = 2] = "Revisao";
    StatusOficina[StatusOficina["Saida"] = 3] = "Saida";
    StatusOficina["Calote"] = "camisa";
})(StatusOficina || (StatusOficina = {}));
console.log('Calote:', StatusOficina.Calote);
console.log('Saida:', StatusOficina.Saida);
