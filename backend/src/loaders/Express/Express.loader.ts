import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";
import routes from "../../routes";
import { EnvVariables } from "../../config/Env";
const PORT = Number(EnvVariables.Port);

const app = express();

const httpServer = createServer(app);

export const setupExpress = (): void => {
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", routes);
};

httpServer.listen(PORT, () => {
  console.log(`Servidor está Rodando na Porta: ${PORT}`);
});