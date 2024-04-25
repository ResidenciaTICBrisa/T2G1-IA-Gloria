"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.handleApplicationErrors = void 0;
var http_status_1 = __importDefault(require("http-status"));
function handleApplicationErrors(err, _req, res, next) {
    if (err.name === 'NotFoundError') {
        return res.status(http_status_1["default"].NOT_FOUND).send({
            message: err.message
        });
    }
    if (err.name === 'UnauthorizedError') {
        return res.status(http_status_1["default"].UNAUTHORIZED).send({
            message: err.message
        });
    }
    if (err.name === 'ValidationError') {
        return res.status(http_status_1["default"].BAD_REQUEST).send({
            message: err.message
        });
    }
    return res.status(http_status_1["default"].INTERNAL_SERVER_ERROR).send({
        message: err.message
    });
}
exports.handleApplicationErrors = handleApplicationErrors;
