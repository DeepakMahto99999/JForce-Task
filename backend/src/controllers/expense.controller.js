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