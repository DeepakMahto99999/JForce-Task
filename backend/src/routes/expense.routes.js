import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createExpenseController
 } from "../controllers/expense.controller.js";

const expenseRouter = express.Router();


/**
 * POST /api/expenses/create
 * Create expense
 */
expenseRouter.post(
    "/create",
    authMiddleware,
    createExpenseController
);


export default expenseRouter;