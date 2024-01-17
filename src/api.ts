import express, { Request, Response } from "express";
import { startNewGameOfConnect4 } from "./connect4";

// Create a new express application instance
export const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.post("/startNewGame", (req: Request, res: Response) => {
  const response = startNewGameOfConnect4();

  res.json({
    response,
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
