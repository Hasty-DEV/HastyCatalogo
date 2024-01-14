// tests/unit/register.controller.unit.test.ts

import { register } from '../../src/controllers/register.controller';
import { closeDatabase } from '../../src/config/db';

describe('Register Controller - Unit Tests', () => {
  test('should register a user successfully', async () => {
    // Crie uma função mock para req e res
    const req = { body: {} } as any;
    const res = { json: jest.fn(), status: jest.fn() } as any;

    req.body = {
      fullName: 'John weergrefweDoe',
      cpf: '12345679012',
      username: 'johwefwerevrevn_doe',
      password: 'password123',
      companyPassword: 'senha_da_sua_empresa',
      role: 'admin',
    };

    await register(req, res);

    // Verificações aprimoradas para as chamadas mock
    expect(res.status).not.toHaveBeenCalled(); // Verifica se não foi chamado
    expect(res.json).toHaveBeenCalled(); // Verifica se foi chamado
  });

  afterAll(async () => {
    // Feche a conexão com o banco de dados após todos os testes
    await closeDatabase();
  });
});
