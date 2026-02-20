require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/events", eventRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});