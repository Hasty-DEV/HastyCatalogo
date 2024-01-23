import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialectOptions: {
    charset: 'utf8mb4',
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
});
 
const closeDatabase = async () => {
  try {
    await sequelize.close();
    logger.info('Conexão com o banco de dados fechada com sucesso.');
  } catch (error) {
    logger.error('Erro ao fechar a conexão com o banco de dados:', error);
  }
};

sequelize
  .authenticate()
  .then(() => {
    logger.info('Conexão bem-sucedida com o banco de dados');
  })
  .catch((error: Error) => {
    logger.error('Erro ao conectar ao banco de dados:', error);
  });

// Exportando a função de fechamento e o objeto sequelize
export { sequelize, closeDatabase };
