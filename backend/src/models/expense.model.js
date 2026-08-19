import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User is required."],
        },
        expenseName: {
            type: String,
            required: [true, "Expense name is required."],
            trim: true,
            minlength: [2, "Expense name must be at least 2 characters long."],
            maxlength: [100, "Expense name cannot exceed 100 characters."],
        },

        amount: {
            type: Number,
            required: [true, "Amount is required."],
            min: [0, "Amount cannot be negative."],
        },

        date: {
            type: Date,
            required: [true, "Date is required."],
        },

        description: {
            type: String,
            trim: true,
            maxlength: [500, "Description cannot exceed 500 characters."],
        },


    },
    {
        timestamps: true,
    }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;