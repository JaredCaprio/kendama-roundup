const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = 8000;

//configuration for environment variables file
dotenv.config({ path: "./env/config.env" });

// Routes
/* app.use("/", require("./routes/index")); */
app.use("/lotus", require("./routes/lotus"));
app.use("/sol", require("./routes/sol"));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
