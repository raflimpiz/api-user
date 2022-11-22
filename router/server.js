const express = require("express");
const app = express();
const users = require("./router/user");
const port = 3000;
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("halo radit");
});

app.use(users);

connectDB();

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
