import "reflect-metadata";
import 'dotenv/config';
require('dotenv').config();
import express, { Request, Response } from "express";
import transactionRoute from "./routes/transaction.routes";





const app = express();

app.use(express.json());

app.use("/v1/api/transactions", transactionRoute);




export default app;