import Expense from "../models/expense.model.js";


export const createExpenseController = async (req, res) => {
    try { 
         console.log("BODY:", req.body);
        console.log("USER:", req.user);
        
        const { expenseName, amount, date, description } = req.body;

        const expense = await Expense.create({
            user: req.user._id,
            expenseName,
            amount,
            date,
            description,
        });

        return res.status(201).json({
            status: "success",
            message: "Expense created successfully.",
            expense,
        });
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
};



/**
 * Get all expenses of logged-in user
 * GET /api/expenses/
 */
export const getExpensesController = async (req, res) => {
    try {
        const expenses = await Expense.find({
            user: req.user._id,
        }).sort({ date: -1 });

        return res.status(200).json({
            status: "success",
            count: expenses.length,
            expenses,
        });
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
};


/**
 * Get one expense
 * GET /api/expenses/:id
 */
export const getExpenseController = async (req, res) => {
    try {
        const { id } = req.params;

        const expense = await Expense.findOne({
            _id: id,
            user: req.user._id,
        });

        if (!expense) {
            return res.status(404).json({
                status: "failed",
                message: "Expense not found.",
            });
        }

        return res.status(200).json({
            status: "success",
            expense,
        });
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
};