const express = require("express");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// If any request comes and routes starts with /api, we map it to apiRouter
app.use("/api", apiRouter);


// last middleware if any error occurs it will be called
app.use(errorHandler);

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is alive" });
});

app.listen(PORT, async () => {
  console.log(`Server is started at ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to db");
});
