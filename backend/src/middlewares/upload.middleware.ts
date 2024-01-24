import multer from 'multer';

// Configuração do multer
const storage = multer.memoryStorage(); // Armazenar o arquivo em memória
const upload = multer({ storage: storage });

// Middleware para lidar com uploads de arquivos
const uploadMiddleware = upload.any(); // Aceitar qualquer campo de arquivo

export default uploadMiddleware;
