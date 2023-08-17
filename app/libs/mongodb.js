import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("not connected", error);
    }
}

export default connectToMongoDB;