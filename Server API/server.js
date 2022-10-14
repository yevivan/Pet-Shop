import app from "./app.js";
import chalk from "chalk";
import mongoose from "mongoose";

const PORT = 3001;
const DB_URL =
  "mongodb+srv://yevivan:Zarenko1957@cluster0.kojygyx.mongodb.net/pets-shop?retryWrites=true&w=majority";

mongoose.connect(DB_URL, (err) => {
  if (err) {
    throw err;
  }
  app.listen(PORT, () => {
    console.log(
      chalk.cyan("-------------------------------------------------")
    );
    console.log(
      chalk.magenta(`Server is listening on http://localhost:${PORT}`)
    );
    console.log(
      chalk.cyan("-------------------------------------------------")
    );
    console.log(chalk.magenta(`Server is connected to DB`));
    console.log(
      chalk.cyan("-------------------------------------------------")
    );
  });
});
