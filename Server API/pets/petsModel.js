import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  img: String,
  price: String,
  description: String,
  isFavorite: Boolean,
});

export const PetsModel = mongoose.model("pets", schema);
