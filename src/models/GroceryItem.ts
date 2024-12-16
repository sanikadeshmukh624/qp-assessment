import { Schema, model } from "mongoose";

interface IGroceryItem {
  name: string;
  category: string;
  price: number;
  inventory: number;
}

const GroceryItemSchema = new Schema<IGroceryItem>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    inventory: { type: Number, required: true },
  },
  { timestamps: true }
);

export const GroceryItem = model<IGroceryItem>("GroceryItem", GroceryItemSchema);
export type { IGroceryItem };
