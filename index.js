import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/UserRoutes.js";

import 'dotenv/config'

const app = express();
// Connecet to mongoose
mongoose.connect(process.env.EXPRESS_DB)
const db = mongoose.connection;
db.on('error', error => console.log(error))
db.once('open', () => console.log('Database connected... '))

// Midleware
app.use(cors())
app.use(express.json()) // Menerima data dalam format JSON
app.use(UserRouter)

app.listen(5000, () => console.log('Server up and running...'))