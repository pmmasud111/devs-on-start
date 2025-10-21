import mongoose from "mongoose";

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI || "", {});
  return conn;
};
export default dbConnect;
