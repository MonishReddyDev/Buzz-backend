import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});



// Upload an image
export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //unpload the file on cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        //file has been uploade successfully
        console.log("file is uploaded on cloudinary", response.url)
        return response
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        fs.unlinkSync(localFilePath)//removes the locally save temp file as the upload operation got failed
        return null
    }
}


