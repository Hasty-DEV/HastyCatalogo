import { createLogger, format, transports } from 'winston';

// Configuração básica do logger
const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console(), // Log para o console
    new transports.File({ filename: 'error.log', level: 'error' }), // Log de erros em um arquivo
    new transports.File({ filename: 'combined.log' }) // Log geral em um arquivo
  ],
});

export default logger;
