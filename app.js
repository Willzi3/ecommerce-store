const express = require('express');
const cors = require('cors');

const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors


app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

const userRoute = require("./routes/userRoute")
app.use("/users", userRoute);

const productRoute = require("./routes/productRoute")
app.use("/products", productRoute);

app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});