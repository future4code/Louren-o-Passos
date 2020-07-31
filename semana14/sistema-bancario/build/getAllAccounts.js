"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const getAllAccounts = () => {
    try {
        index_1.readDatabase();
    }
    catch (error) {
        console.log(error);
    }
};
getAllAccounts();
