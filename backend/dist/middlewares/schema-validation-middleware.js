"use strict";
exports.__esModule = true;
exports.validateSchema = void 0;
function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body).error;
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}
exports.validateSchema = validateSchema;
