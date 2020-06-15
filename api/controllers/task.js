const mongoose = require("mongoose");
const Task = mongoose.model("Task");

// MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

//read taskByUserId
const taskListByUserId = (req, res) => {
  Task.find({ userId: req.params.userId }).exec((err, task) => {
    res.status(200).json(task);
  });
};
//delete task
//update task
//create task
// const taskCreate = (req, res) => {
//   console.log("req.params", req.params);
//   console.log("req.body", req.body);
//   Task.create(
//     {
//       taskName: req.body.taskName,
//       userId: req.body.userId,
//       status: req.body.userStatus
//     },
//     (err, task) => {
//       if (err) {
//         res.status(400).json(err);
//       } else {
//         res.status(201).json(task);
//       }
//     }
//   );
// };

const taskCreate = (req, res) => {
  const task = new Task();

  task.taskName = req.body.taskName;
  task.userId = req.body.userId;
  task.status = req.body.status;

  task.save(err => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(task);
    }
  });
};

// const taskListByUserId = (req, res) => {
//   res.status(200).json({ status: "success" });
// };
// const taskCreate = (req, res) => {
//   res.status(200).json({ status: "success" });
// };
const taskReadOne = (req, res) => {
  res.status(200).json({ status: "success" });
};

const taskUpdateOne = (req, res) => {
  res.status(200).json({ status: "success" });
};
const taskDeleteOne = (req, res) => {
  res.status(200).json({ status: "success" });
};

module.exports = {
  taskListByUserId,
  taskCreate,
  taskReadOne,
  taskUpdateOne,
  taskDeleteOne
};
