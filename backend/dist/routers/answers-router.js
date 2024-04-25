"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var answers_controller_1 = require("../controllers/answers-controller");
var answersRouter = express_1["default"].Router();
// Rotas relacionadas às respostas
answersRouter.post('/', answers_controller_1.answersController.create);
answersRouter.get('/', answers_controller_1.answersController.getAll);
answersRouter.get('/:id', answers_controller_1.answersController.getById);
exports["default"] = answersRouter;
