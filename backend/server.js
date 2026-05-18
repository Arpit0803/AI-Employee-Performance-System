const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Employee Routes
app.use(
  "/api/employees",
  require("./routes/employeeRoutes")
);

// Auth Routes
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

// AI Routes
app.use(
  "/api/ai",
  require("./routes/aiRoutes")
);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

// Test Route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});