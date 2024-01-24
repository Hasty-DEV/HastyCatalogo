import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import Produto from './produtos.model'; // Importe o modelo Produto

class Pedido extends Model {
  public id!: number;
  public nomeCompleto!: string;
  public whatsapp!: string;
  public informacaoAdicional!: string;
  public produto!: string;
  public subtotal!: number;
  public entrega!: number;
  public total!: number;
  public opcaoPagamento!: string;
  public cep!: string;
  public endereco!: string;
  public numero!: string;
  public bairro!: string;
  public complemento!: string;
  public cidade!: string;
  public estado!: string;
  public quantidade!: number; // Adicione o campo quantidade
  public produto_id!: number;
  createdAt?: Date;
  // Adicione a relação de chave estrangeira com a tabela Produto
  public produtoObj?: Produto; // Renomeie para evitar conflitos de nomes

  static associate(models: any) {
    Pedido.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'produtoObj' });
  }
}

Pedido.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nomeCompleto: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    whatsapp: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    informacaoAdicional: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    produto: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    entrega: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    opcaoPagamento: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    cep: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    endereco: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    numero: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    bairro: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    complemento: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    cidade: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    estado: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    produto_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'Pedidos',
    sequelize,
  }
);

export { Pedido };
