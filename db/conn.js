import mongoose from "mongoose";

const DB_LINK = "mongodb+srv://admin:3y3vaye1@luxten.oplfxmh.mongodb.net/?retryWrites=true&w=majority&appName=luxten";

const db_connection = async () => {
    try {
        mongoose.connect(DB_LINK);
        console.log("Database connection succesfully...");
    } catch(error) {
        console.error(error);
    }
}

export default db_connection;