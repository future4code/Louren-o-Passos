"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joana = exports.Carlos = exports.João = void 0;
const minhaString = "Tudo bem?";
const meuNumero = 14;
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
console.log(exports.Carlos, exports.Joana);
//# sourceMappingURL=exercicio1.js.map