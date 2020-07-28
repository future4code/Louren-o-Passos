"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joana = exports.Carlos = exports.João = exports.Paulo = exports.meuNumero = exports.minhaString = void 0;
exports.minhaString = "Tudo bem?";
exports.meuNumero = 14;
exports.Paulo = {
    nome: "Paulo",
    idade: 35,
    corFavorita: "Amarelo",
};
exports.João = {
    nome: "Carlos",
    idade: 20,
    corFavorita: "Azul",
};
var cores;
(function (cores) {
    cores["VERMELHO"] = "Vermelho";
    cores["AZUL"] = "Azul";
    cores["AMARELO"] = "Amarelo";
})(cores || (cores = {}));
exports.Carlos = {
    nome: "Carlos",
    idade: 50,
    corFavorita: cores.VERMELHO,
};
exports.Joana = {
    nome: "Joana",
    idade: 10,
    corFavorita: cores.AZUL,
};
//# sourceMappingURL=ex1.js.map