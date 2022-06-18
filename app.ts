import "reflect-metadata";
import 'dotenv/config';
require('dotenv').config();
import express, { Request, Response } from "express";





const app = express();

app.use(express.json());



export default app;