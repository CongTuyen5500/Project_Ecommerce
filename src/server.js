const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/database/db");
const route = require("./routes/index");

db.connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app);

// app.get("/", function (req, res) {
//   res.json({
//     message: "test port",
//   });
// });

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
