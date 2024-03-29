import express, { Request, Response, NextFunction , ErrorRequestHandler } from "express";
import cors from "cors";
import router from "./routes/main";
import dotenv from "dotenv";
import './config/db';
import logger from './config/logger';
import uploadMiddleware from "./middlewares/upload.middleware";
import swaggerUi from 'swagger-ui-express';
import specs from './Swagger'; 

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use(uploadMiddleware);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Erro interno do servidor');
};

app.use(errorHandler);


app.get("/", (req: Request, res: Response) => {
  res.send("Seja Bem vindo a API do Hasty Catalogo!");
});

app.use("/api", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


app.use((req: Request, res: Response) => {
  res.status(404).send("Endpoint não encontrado");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Erro interno do servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ` + PORT);
});