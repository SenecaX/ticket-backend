const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");

router.route("/task").post(taskController.taskCreate);

router.route("/task/:userId").get(taskController.taskListByUserId);

module.exports = router;
