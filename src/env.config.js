import dotenv from "dotenv";

dotenv.config({
    path: "./env",
});


const { env } = process

export const {
    PORT,
    MONGO_URL,
    DB_Name,
    AWS_ACCESS_KEY_ID,
    JWT_SECRET,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION
} = env;

