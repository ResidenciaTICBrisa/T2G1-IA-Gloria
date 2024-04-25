"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
var joi_1 = __importDefault(require("joi"));
// Array de opções de resposta
var tiposDeViolencia = ['física', 'psicológica', 'sexual', 'patrimonial', 'moral'];
var ondeViolencia = ['casa', 'trabalho', 'casa de amigos/familiares', 'rua'];
// Schema para a pergunta 1: Que tipo de violência você vivenciou?
var tipoViolenciaSchema = (_a = joi_1["default"].string()).valid.apply(_a, tiposDeViolencia).required();
// Schema para a pergunta 2: Onde você sofreu essa violência?
var ondeViolenciaSchema = (_b = joi_1["default"].string()).valid.apply(_b, ondeViolencia).required();
module.exports = [
    tipoViolenciaSchema,
    ondeViolenciaSchema
];
