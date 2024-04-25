"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
exports.estadoDoFormularioSchema = exports.FormStateSchema = void 0;
var joi_1 = __importDefault(require("joi"));
// Array de opções de estado
var estadosPossiveis = ['ativo', 'inativo', 'pendente'];
// Schema para o estado do formulário
var FormStateSchema = joi_1["default"].object({
    state: (_a = joi_1["default"].string()).valid.apply(_a, estadosPossiveis).required()
});
exports.FormStateSchema = FormStateSchema;
// Validador Joi para o estado do formulário
var estadoDoFormularioSchema = (_b = joi_1["default"].string()).valid.apply(_b, estadosPossiveis).required();
exports.estadoDoFormularioSchema = estadoDoFormularioSchema;
