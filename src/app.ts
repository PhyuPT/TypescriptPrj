import express from "express";
import morgan from "morgan";
import Router from "./routes/Routes";
const app = express();

// MIDDLEWARES
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use((req, res, next) => {
    console.log("Hello from the middleware 👋");
    next();
  });

  // ROUTES
app.use("/api/v1/employee", Router);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Express Server!!!!");
});

  export default app;