import { Request, Response } from "express"
import Joi, { Schema } from "joi";

import { Transaction } from "../models/transaction.model"
import { validateSchema } from "../utils/validator";


export const createTransaction = async (req: Request, res: Response) => {
    try {
        const schema: Schema = Joi.object({
            emailAddress: Joi.string().required().email().label("Email address"),
            inputAmount: Joi.number().required().label("Input amount"),
            inputAmountCurrency: Joi.string().required().label("Input amount currency"),
            outputAmount: Joi.number().required().label("Output amount"),
            outputAmountCurrency: Joi.string().required().label("Output amount currency"),
        });
        const result = validateSchema(req.body, schema);
        if (result) return res.status(200).send({ success: false, message: result });
        const transaction = await Transaction.create(req.body)
        return res.send({ success: true, message: "Transaction created successfully", data: transaction })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: "Error Occurred" })
    }


}

export const getTransaction = async (req: Request, res: Response) => {
    try {
        const schema: Schema = Joi.object({
            transactionId: Joi.number().required().label("Transaction id"),
        });
        const result = validateSchema(req.params, schema);
        if (result) return res.status(200).send({ success: false, message: result });
        const transaction = await Transaction.findOne({ where: { id: req.params.transactionId } })
        if (!transaction) return res.status(200).send({ success: false, message: "Transaction not found" })
        return res.send({ success: true, message: "Transaction found", data: transaction })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: "Error Occurred" })


    }

}

export const getTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await Transaction.findAll();
        return res.send({ success: true, message: "Transactions found", data: transactions })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, message: "Error Occurred" })
    }
}