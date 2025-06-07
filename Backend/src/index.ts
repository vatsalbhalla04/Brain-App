import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRoute } from "./routes/user";
import { contentRoute } from "./routes/content";
import cors from "cors"
import { userMiddleware } from "./middleware/middleware";
import { shareRoute } from "./routes/share";
const app = express();
// Load .env variables
dotenv.config();

const mongoURI = process.env.MONGO_STRING as string;

app.use(cors());
app.use(express.json()); 
app.use('/api/v1/user',userRoute); 
app.use('/api/v1/content',userMiddleware,contentRoute); 
app.use('/api/v1/brain/share',shareRoute); 

if (!mongoURI) {
  throw new Error("MONGO_STRING is not defined in the .env file.");
}

async function main() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!");

    const PORT: number = 3000;
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

main();
