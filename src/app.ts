const express = require("express");
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import { connectToDatabase } from "./databaseConnection";
import { roleRoute } from "./routes/role.route";
import { userRoute } from "./routes/user.route";
import { articleRoute } from "./routes/article.route";
import { categoryRoute } from "./routes/category.route";
import { tagRoute } from "./routes/tag.route";
import { apiDocumentation } from "./docs/apidoc";

dotenv.config();

const port = parseInt(process.env.port || "8080");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", roleRoute());
app.use("/", userRoute());
app.use("/", articleRoute());
app.use("/", categoryRoute());
app.use("/", tagRoute());
app.use("/", swaggerUi.serve, swaggerUi.setup(apiDocumentation));


app.listen(port, async () => {
  await connectToDatabase();

  console.log(`Application started on URL http://localhost:${port}`);
});
