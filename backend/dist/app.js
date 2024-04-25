"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var error_handling_middleware_1 = require("./middlewares/error-handling-middleware");
var answers_router_1 = __importDefault(require("./routers/answers-router"));
var formStatePage_1 = require("./routers/formStatePage");
var app = (0, express_1["default"])();
var port = process.env.PORT || 4000;
app
    .use((0, cors_1["default"])())
    .use(express_1["default"].json())
    .get('/health', function (_req, res) { return res.send('OK!'); }) // rota teste para garantir que o servidor está rodando
    .use(answers_router_1["default"])
    .use(formStatePage_1.formStateRouter)
    .use(error_handling_middleware_1.handleApplicationErrors)
    .listen(port, function () {
    console.log("Servidor rodando na porta ".concat(port));
});
exports["default"] = app;
