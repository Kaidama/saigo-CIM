import mongoose from "mongoose";
import "dotenv/config";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("Connection to MongoDB Atlas successful");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectMongoDB;
