import { User } from "../models/user.model.js";
import fs from "fs"
import s3 from "../utlis/awsConfig.js"




export const findUserProfileService = async (req) => {
    const { email } = req;
    const user = await User.findOne({ email }); // find the user by email
    return user;
};

export const createUserService = async (userData) => {
    const { firstName, lastName, email, secondaryEmail, username, phoneNumber, city, state, zipCode, profilePicture } = userData

    //check for the user in db
    const existingUser = await User.findOne({ email })

    // Return null or handle this case
    if (existingUser) return { error: "User already exists" };

    // Create a new user
    const newUser = new User({
        firstName,
        lastName,
        email,
        secondaryEmail,
        username,
        phoneNumber,
        city,
        state,
        zipCode,
        profilePicture,
    });

    await newUser.save()

    return newUser


}


export const updateUserService = async (userData) => {
    //get the user data
    const { firstName, lastName, email, secondaryEmail, username, phoneNumber, city, state, zipCode } = userData;

    //find the user by email and update
    const updateUser = await User.findOneAndUpdate(
        { email },
        {
            firstName,
            lastName,
            email,
            secondaryEmail,
            username,
            phoneNumber,
            city,
            state,
            zipCode
        },
        { new: true, runValidators: true })

    //user not found
    if (!updateUser) {
        return { error: "user not found!" }
    }

    return updateUser
}

export const updateProfileService = async (userData) => {
    const { email } = userData;

    if (!email) {
        return { error: "Email is required!" };
    }

    if (!userData.file) {
        return { error: "No file is uploaded!" };
    }

    const profileImagePath = userData.file.path;

    const user = await User.findOne({ email });


    if (!user) {
        return { error: "user not found" }
    }


    //upload to aws s3 
    const fileContent = fs.readFileSync(profileImagePath)

    const params = {
        Bucket: process.env.S3_BUCKET, // Your S3 bucket name
        Key: `${Date.now()}_${userData.file.originalname}`, // Unique filename
        Body: fileContent,
        ContentType: userData.file.mimetype, // Set the correct content type

    };

    console.log(params)

    let s3Response;

    try {

        s3Response = await s3.upload(params).promise()


    } catch (error) {

        return { error: "Failed to upload image to S3: " + error.message };


    }


    //update the profilePicture with s3 URL 
    user.profilePicture = s3Response.Location
    await user.save()

    // Remove local file
    fs.unlinkSync(profileImagePath);


    return user


}
