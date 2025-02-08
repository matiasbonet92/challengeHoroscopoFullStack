import express from "express";
import cors from "cors";
import { getHoroscopeData } from "./controllers/getHoroscopeData.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/', getHoroscopeData);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});