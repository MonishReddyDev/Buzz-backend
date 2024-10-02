// Middleware imports
import { requestValidation } from "../middleware/user.validation.middleware.js";

//service imports
import {
    createUserService,
    findUserProfileService,
    updateUserService,
    updateProfileService
} from "../services/user.service.js";

//validation import
import { UserSchema } from "../validations/user.validation.js";

// Utility imports
import asyncHandler from "../utlis/asyncHandler.js"
import ApiResponse from "../utlis/apiResponse.js"
import { sendErrorResponse } from "../utlis/responseHandler.js";


export const getUserProfile = asyncHandler(async (req, res, next) => {

    const user = await findUserProfileService(req.body);

    //send error if user not found
    if (!user) {
        return sendErrorResponse(res, 404, "user not found");
    }

    const response = new ApiResponse(200, user, "User found successfully")
    //send success when user found
    res.status(response.statusCode).json(response)

})

export const createUser = [requestValidation(UserSchema), asyncHandler(async (req, res) => {

    // Call service function
    const newUser = await createUserService(req.body)


    // If the user already exists, send a 400 error response
    if (newUser.error) {
        return sendErrorResponse(res, 400, newUser.error);
    }

    const response = new ApiResponse(201, newUser, "User created successfully")
    //send user as response
    res.status(response.statusCode).json(response)
})]


export const updateUser = [requestValidation(UserSchema), asyncHandler(async (req, res) => {

    const user = await updateUserService(req.body)

    //user not found
    if (user.error) {
        return sendErrorResponse(res, 400, user.error);
    }


    const response = new ApiResponse(200, user, "User details updated successfully")
    //user updated successfully
    res.status(response.statusCode).json(response);


})]


export const updateProfileImage = asyncHandler(async (req, res) => {
    const userData = {
        email: req.body.email,
        file: req.file
    };

    const user = await updateProfileService(userData);


    if (user.error) {
        return sendErrorResponse(res, 400, user.error)
    }

    const response = new ApiResponse(200, user, "Profile image updated successfully")
    return res.status(response.statusCode).json(response);
});
