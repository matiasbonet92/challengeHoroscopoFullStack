import express from "express";
import cors from "cors";
import { getHoroscopeData } from "./controllers/getHoroscopeData.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/', getHoroscopeData);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});