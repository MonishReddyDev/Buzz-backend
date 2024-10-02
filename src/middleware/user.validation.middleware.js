
export const requestValidation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false })
        console.log("validationmiddleware error:", error)
        if (error) {
            // If validation fails, send a 400 error with details
            return res.status(400).json({
                message: "Validation error",
                details: error.details.map(detail => detail.message)
            });
        }
        next();
    }

}
