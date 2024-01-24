import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import { Pedido } from './pedidos.model';

class Produto extends Model {
  public id!: number;
  public title!: string;
  public price!: string;
  public category!: string;
  public image!: string;
  public ativo!: boolean;

  // Adicione o novo campo `ativo` ao modelo
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Produto.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Define o padrão como true (produto ativo)
    },
  },
  {
    sequelize,
    tableName: 'produtos',
    timestamps: true,
    underscored: true,
    modelName: 'Produto',
  }
);

Produto.hasMany(Pedido, { foreignKey: 'produto_id', as: 'pedidos' });

export default Produto;
