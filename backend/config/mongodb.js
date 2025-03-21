import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    await mongoose.connect(`${process.env.MongoDB}`);
  } catch (error) {
    console.log("error in mongodb", error);
    process.exit(1);
  }
};

export default connectDB;
