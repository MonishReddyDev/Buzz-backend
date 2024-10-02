class ApiError {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.errors = errors;
        this.data = null; // Optional, to indicate no data on error

        // Stack trace, important for debugging in production environments
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    send(res) {
        return res.status(this.statusCode).json({
            success: this.success,
            message: this.message,
            errors: this.errors,
            data: this.data,
        });
    }
}

export default ApiError;
