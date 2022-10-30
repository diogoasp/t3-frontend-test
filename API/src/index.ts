import "dotenv/config";
import cors from "cors";
import express from "express";

import AplicarRotas from "./routes/AplicarRotas";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8081;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URI || "");

AplicarRotas(app);

app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}`)
});