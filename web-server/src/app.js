import express from "express";

const app = express();

app.get("", (req, res) => {
  res.send("Welcome to home page! :)");
});

app.get("/help", (req, res) => {
  res.send("Help page content.");
});

app.get("/about", (req, res) => {
  res.send("About page content.");
});

app.get("/weather", (req, res) => {
  res.send("Weather page content.");
});

app.listen(3000, () => console.log("Server is up on port 3000!"));
