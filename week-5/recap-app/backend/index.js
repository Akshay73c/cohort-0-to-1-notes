// write basic express boilerplate code
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(403).json({ message: "Wrong inputs" });
    return;
  }
  //put in mongodb
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({ message: "Todo created" });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json({ todos });
});

app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(403).json({ message: "Wrong inputs" });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({ message: "Todo marked as completed" });
});

app.listen(3000, () => {
  console.log("server started");
});
