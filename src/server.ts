import express from "express";
import "@controllers/UserController";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.listen(3333, () => {
  console.log("App Running...");
});
