const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/index");
const db = require("./config/db/index");
const authMiddleware = require("./app/middlewares/authMiddleware");

const app = express();
dotenv.config();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware);

db.connect();
route(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
