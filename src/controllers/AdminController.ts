import { Request, Response } from "express";
import { GroceryItem } from "../models/GroceryItem";

// Add new grocery item
export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const { name, category, price, inventory } = req.body;
    const newItem = await GroceryItem.create({ name, category, price, inventory });
    res.status(201).json({ message: "Grocery item added successfully", itemId: newItem.id });
  } catch (error) {
    res.status(500).json({ message: "Error adding grocery item", error });
  }
};

// Get all grocery items
export const getGroceryItems = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const items = await GroceryItem.find(query);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching grocery items", error });
  }
};

// Update grocery item details
export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, update, { new: true });
    if (!updatedItem) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    res.status(200).json({ message: "Grocery item updated", item: updatedItem });
  } catch (error) {
    res.status(500).json({ message: "Error updating grocery item", error });
  }
};

// Remove grocery item
export const deleteGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedItem = await GroceryItem.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    res.status(200).json({ message: "Grocery item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting grocery item", error });
  }
};

// Update inventory levels
export const updateInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { inventory } = req.body;
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, { inventory }, { new: true });
    if (!updatedItem) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    res.status(200).json({ message: "Inventory updated", item: updatedItem });
  } catch (error) {
    res.status(500).json({ message: "Error updating inventory", error });
  }
};
