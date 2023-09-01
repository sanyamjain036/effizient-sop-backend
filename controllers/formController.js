import { SOPform } from "../models/sopformModel.js";
import asyncHandler from "express-async-handler"
import { send_mail } from "../helpers/mail.js";

// @desc    Add new sop form
// @route   POST /api/sopform/create
// @access  Public
const createForm = asyncHandler(async (req, res) => {
    const { formData } = req.body;
    try {
        const newForm = await SOPform.create(formData)
        const populatedForm=await SOPform.find({ email:newForm.email}).populate("highestLevelOfEducation", 'edu');
        await send_mail(populatedForm[0]);
        res.status(201).json({message:"Form successfully submitted! Check your Email."});
    }
    catch (error) {
        let errMsg;
        if (error.code == 11000) {
            errMsg = Object.keys(error.keyValue)[0] + " already exists.";
        } else {
            errMsg = error.message;
        }
        res.status(400).json({ statusText: "Bad Request", message: errMsg });
    }

});

// @desc    Add all sop form
// @route   GET /api/sopform/
// @access  Public
const getAllForms = asyncHandler(async (req, res) => {
    const forms = await SOPform.find().populate("highestLevelOfEducation", 'edu');
    res.status(201).json(forms);
});


export { createForm, getAllForms };