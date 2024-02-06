import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import { Pedido } from './pedidos.model';

class Produto extends Model {
  public id!: number;
  public title!: string;
  public price!: string;
  public category!: string[];
  public image!: string;
  public ativo!: boolean;
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
      type: DataTypes.TEXT,  // Use DataTypes.TEXT em vez de DataTypes.ARRAY(DataTypes.STRING)
      allowNull: false,
      get() {
        const rawValue: string = this.getDataValue('category');
        try {
          const parsedValue = JSON.parse(rawValue);
          return Array.isArray(parsedValue) ? parsedValue : [];
        } catch (error) {
          return [];
        }
      },
      set(value: string[]) {
        this.setDataValue('category', JSON.stringify(value));
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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
