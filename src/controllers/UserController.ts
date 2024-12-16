import { Request, Response } from "express";
import { GroceryItem } from "../models/GroceryItem";

// Get available grocery items
export const getAvailableItems = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.find({ inventory: { $gt: 0 } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching available items", error });
  }
};

// Place an order
export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { items } = req.body; // [{ id: string, quantity: number }]
    const orderDetails: any[] = [];

    for (const item of items) {
      const groceryItem = await GroceryItem.findById(item.id);
      console.log("groceryItem=====",groceryItem);
      if (!groceryItem || groceryItem.inventory < item.quantity) {
        res.status(400).json({ message: "Item not available or insufficient inventory", item });
        return;
      }
      groceryItem.inventory -= item.quantity;
      await groceryItem.save();
      orderDetails.push({ name: groceryItem.name, quantity: item.quantity, price: groceryItem.price });
    }

    res.status(201).json({ message: "Order placed successfully", order: orderDetails });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
};
