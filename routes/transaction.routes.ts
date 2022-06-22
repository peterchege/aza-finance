import { Router, Request, Response } from "express";
import { createTransaction, getTransactions, getTransaction, updateTransaction } from "../controller/transaction.controller";
const transactionRoute = Router();

transactionRoute.post("/", createTransaction)
transactionRoute.get("/", getTransactions)
transactionRoute.get("/:transactionId", getTransaction)
transactionRoute.put("/:transactionId", updateTransaction)


export default transactionRoute