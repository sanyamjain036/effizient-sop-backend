import { HLE } from "../models/sopformModel.js";
import asyncHandler from "express-async-handler"


// @desc    Add new edu
// @route   POST /api/hle/create
// @access  Public
const addHLE = asyncHandler(async (req, res) => {
    const { edu } = req.body;
    // Check if same HLE exists
    const anotherHLE = await HLE.findOne({ edu });
    if (anotherHLE) {
      res.status(400).json({status:`This already exists!`});
      throw new Error(`This already exists!`);
    }
    // Create HLE
    const hle = await HLE.create({edu});
    if (hle) {
      res.status(201).json({status:"Successfully Added"});

    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
  });
  

// @desc    Get all edu
// @route   GET /api/hle/
// @access  Public
const getHLE = asyncHandler(async (req, res) => {
        const hle=await HLE.find({});
        res.status(200).json(hle);
  });
  

  export {
    addHLE,getHLE
  }
