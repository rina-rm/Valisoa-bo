import express from "express";

const app = express();

const USERS = [{ id: 1, name: "Alice", age: 23 }];

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  res.json(USERS);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = USERS.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
