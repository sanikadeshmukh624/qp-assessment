import express from "express";
import { getAvailableItems, placeOrder } from "../controllers/UserController";

const router = express.Router();

router.get("/grocery", getAvailableItems);
router.post("/order", placeOrder);

export default router;
