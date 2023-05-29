import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import rootRoute from "./backend/routes/root.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();



app.use("/", express.static(path.join(__dirname, "/backend/public")));
app.use("/", rootRoute);


app.listen(PORT, () => console.log(`Server runing on PORT:${PORT}`));
