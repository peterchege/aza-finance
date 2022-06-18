import { Router, Request, Response } from "express";
import { createTransaction, getTransactions, getTransaction } from "../controller/transaction.controller";
const transactionRoute = Router();

transactionRoute.post("/", createTransaction)
transactionRoute.get("/", getTransactions)
transactionRoute.get("/:transactionId", getTransaction)

export default transactionRoute