import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://chandanasreekrishna:<db_password>@cluster0.yhz0l.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
