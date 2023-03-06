const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routes/routes");
require("dotenv").config();

const app = express();

var PORT = process.env.PORT || 8080;

// Using cors
app.use(cors());
  
// Declaring Routes
app.use("/", router);

// Misc
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});