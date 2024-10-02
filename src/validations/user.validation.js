import Joi from "joi";


export const UserSchema = Joi.object({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().pattern(/@gmail\.com$/).required(),
    secondaryEmail: Joi.string().email().optional(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required(),
    city: Joi.string().max(50).optional(),
    state: Joi.string().max(50).optional(),
    zipCode: Joi.string().pattern(/^[0-9]{5}$/).optional(),
    profilePicture: Joi.string().uri().optional(),
});
