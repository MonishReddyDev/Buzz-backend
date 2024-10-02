
export const sendErrorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        statusCode: statusCode,
        success: false,
        message,
    });
};

export const sendSuccessResponse = (res, statusCode, data, message) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message,
    });
};
