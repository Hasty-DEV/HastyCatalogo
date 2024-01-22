// Importe os módulos necessários do Sequelize
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

// Defina a interface para os atributos do modelo
interface PedidoAttributes {
  id?: number;
  nomeCompleto: string;
  whatsapp: string;
  informacaoAdicional: string;
  produto: string;
  subtotal: number;
  entrega: number;
  total: number;
  opcaoPagamento: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
  createdAt?: Date;
}

// Extenda a classe Model do Sequelize e implemente a interface para criar o modelo Pedido
class Pedido extends Model<PedidoAttributes> implements PedidoAttributes {
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
  public createdAt!: Date;
}

// Inicialize o modelo Pedido
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

// Exporte o modelo Pedido para ser utilizado em outros lugares da sua aplicação
export { Pedido };
