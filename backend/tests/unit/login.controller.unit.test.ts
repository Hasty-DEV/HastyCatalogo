// tests/unit/register.controller.unit.test.ts

import { login } from '../../src/controllers/login.controller';
import { closeDatabase } from '../../src/config/db';

describe('Register Controller - Unit Tests', () => {
    test('should handle invalid credentials with wrong company password', async () => {
        // Crie uma função mock para req e res
        const req = { body: {} } as any;
        const res = { json: jest.fn(), status: jest.fn() } as any;
      
        req.body = {
          cpf: '12345678901',
          password: 'password123',
          companyPassword: 'senha_da_sua_empresa',
        };
      
        await login(req, res);
      
        // Verificações aprimoradas para as chamadas mock
        expect(res.status).toHaveBeenCalledWith(401); // Verifica se foi chamado com o status 401
        expect(res.json).toHaveBeenCalledWith({ error: 'Credenciais inválidas' }); // Verifica se foi chamado com a mensagem esperada
      });

  afterAll(async () => {
    // Feche a conexão com o banco de dados após todos os testes
    await closeDatabase();
  });
});
