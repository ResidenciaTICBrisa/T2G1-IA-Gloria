"use strict";
exports.__esModule = true;
exports.validationError = exports.unauthorizedError = exports.notFoundError = void 0;
function notFoundError() {
    return {
        name: 'NotFoundError',
        message: 'No result for this search!'
    };
}
exports.notFoundError = notFoundError;
function unauthorizedError() {
    return {
        name: 'UnauthorizedError',
        message: 'Unauthorized access!'
    };
}
exports.unauthorizedError = unauthorizedError;
function validationError() {
    return {
        name: 'ValidationError',
        message: 'Validation failed'
    };
}
exports.validationError = validationError;
