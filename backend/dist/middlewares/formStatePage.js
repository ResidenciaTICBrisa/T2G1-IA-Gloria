"use strict";
exports.__esModule = true;
exports.loggerMiddleware = void 0;
function loggerMiddleware(req, res, next) {
    console.log("".concat(req.method, " ").concat(req.path));
    next();
}
exports.loggerMiddleware = loggerMiddleware;
