import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://chandanasreekrishna:Chandana1998!@cluster0.yhz0l.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
