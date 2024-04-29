import * as dotenv from "dotenv";

dotenv.config();

export const EnvVariables = {
  node_env: process.env.NODE_ENV,
  sequelize: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
  },
  Port: process.env.PORT,
};