import mongoose, { Schema, models } from "mongoose";
import { number } from "zod";

const quantitiesSchema = new Schema({
    operative: {
        type: Number,
        required: true,
    },
    reparation: {
        type: Number,
        required: true,
    },
    terrain: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
})

const stockRangesSchema = new Schema({
    min: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    }
})

const storageItemSchema = new Schema(
  {
    identifier: {
      type: String,
      required: true,
    },
    quantities: {
        type: quantitiesSchema,
        required: true,
    },
    stockRanges: {
      type: stockRangesSchema,
      required: true,
    },    
  },
  { timestamps: true }
);

const StorageItem = models.StorageItem || mongoose.model("StorageItem", storageItemSchema);
export default StorageItem;