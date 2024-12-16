import express from "express";
import mongoose from "mongoose";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/admin", AdminRoutes);
app.use("/api/user", UserRoutes);

mongoose.connect(process.env.MONGO_URI as string, { 
    // useNewUrlParser: true, 
    // useUnifiedTopology: true 
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
