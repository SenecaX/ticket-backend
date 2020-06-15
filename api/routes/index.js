const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");

router.route("/task").post(taskController.taskCreate);

router
  .route("/task/:userId")
  .get(taskController.taskListByUserId)
  .put(taskController.taskUpdateOne)
  .delete(taskController.taskDeleteOne);

module.exports = router;
