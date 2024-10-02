import express from "express";
import { createUser, getUserProfile, updateProfileImage, updateUser } from "../controllers/user.controller.js";
import authorization from "../middleware/authorization.middleware.js";
import { upload } from "../middleware/multer.middleware.js";


const router = express.Router()
// Middleware for authorization

// router.use(authorization);
router.route("/profile")
    .get(getUserProfile)
    .post(createUser)
    .put(updateUser);


router.post("/updateProfile", upload.single('image'), updateProfileImage)



export default router