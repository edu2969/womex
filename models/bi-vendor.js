import mongoose, { Schema, models } from "mongoose";

const biVendorSchema = new Schema(
  {
    vendorId: {
      type: String,
    },
    productId: {
        type: String,        
    },
    price: {
        type: Number,
    },
    date: { 
        type: Date,
        required: true,
    },
    period: {
        type: "week" | "moth" | "year",
        required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const BIVendor = models.Vendor || mongoose.model("BIVendor", biVendorSchema);
export default BIVendor;