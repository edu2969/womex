import mongoose, { Schema, models } from "mongoose";

const biStorageItemSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    period: {
      type: String,
      required: true,
    },    
  },
  { timestamps: true }
);

const BIStorageItem = models.BIStorageItem || mongoose.model("BIStorageItem", biStorageItemSchema);
export default BIStorageItem;