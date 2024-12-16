import express from "express";
import {
  addGroceryItem,
  getGroceryItems,
  updateGroceryItem,
  deleteGroceryItem,
  updateInventory,
} from "../controllers/AdminController";

const router = express.Router();

router.post("/grocery", addGroceryItem);
router.get("/grocery", getGroceryItems);
router.put("/grocery/:id", updateGroceryItem);
router.delete("/grocery/:id", deleteGroceryItem);
router.put("/grocery/:id/inventory", updateInventory);

export default router;
