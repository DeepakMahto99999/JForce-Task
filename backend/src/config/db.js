import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to DB");
    } catch (error) {
        console.log("Error is connecting to DB",err);
        process.exit(1);
    }
}

export default connectToDB;