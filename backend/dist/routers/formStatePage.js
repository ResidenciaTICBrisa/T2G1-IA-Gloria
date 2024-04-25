"use strict";
exports.__esModule = true;
exports.formStateRouter = void 0;
var express_1 = require("express");
var formStatePage_1 = require("../controllers/formStatePage");
var formStateRouter = (0, express_1.Router)();
exports.formStateRouter = formStateRouter;
var formStateController = new formStatePage_1.FormStateController();
formStateRouter.get('/', formStateController.handleGetFormState);
formStateRouter.post('/', formStateController.handlePostFormState); // Adicionando rota POST
