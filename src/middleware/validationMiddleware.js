import { validationResult, checkSchema } from 'express-validator';

export function checkAndValidateRequest(validationSchema) {
    return [
        checkSchema(validationSchema),
        (req, res, next) => {
            validateRequest(req, res, next);
        },
    ];
}

function validateRequest(req, res, next) {
    console.log('validateRequest')

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
                .map(error => {
                    return {
                        location: error.path, message: error.msg
                    }
                })
        })
    }

    next();
}