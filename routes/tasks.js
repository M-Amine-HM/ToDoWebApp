//find all tasks 

const express = require('express');
const router = express.Router();

// lama helka 3amltli error
//const router = require("express").Router;
const TaskController = require("../controllers/tasks");

//find all tasks
router.get("/", TaskController.index);

//create a new task
router.post("/create", TaskController.create);

//edit the form

router.get("/update/:id", TaskController.edit);

// update the task 
router.put("/update/:id", TaskController.update);

//delete the task

router.delete("/delete/:id", TaskController.delete);

module.exports = router;