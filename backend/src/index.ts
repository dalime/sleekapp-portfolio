import express, { Request, Response } from "express";

// Constants
const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.json("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});