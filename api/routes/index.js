const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");

//task
// router
//   .route("/task")
//   .get(taskController.taskId)
//   .post(taskController.taskCreate);

// router
//   .route("/task/:userId")
//   .get(taskController.taskReadOne)
//   .put(taskController.taskUpdateOne)
//   .delete(taskController.taskDeleteOne);

// router
//   .route("/task")
//   .get(taskController.taskId)
//   .post(taskController.taskCreate);

// router
//   .route("/task/:userId")
//   .get(taskController.taskListByUserId)
//   .post(taskController.taskCreate);
//   .delete(taskController.taskDeleteOne);

router.route("/task").post(taskController.taskCreate);

module.exports = router;
