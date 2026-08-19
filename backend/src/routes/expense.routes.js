import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createExpenseController,
          getExpenseController,
          getExpensesController
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


/**
 * GET /api/expenses
 * Get all expenses of logged-in user
 */
expenseRouter.get(
    "/",
    authMiddleware,
    getExpensesController
);


/**
 * GET /api/expenses/:id
 * Get one expense
 */
expenseRouter.get(
    "/:id",
    authMiddleware,
    getExpenseController
);


export default expenseRouter;