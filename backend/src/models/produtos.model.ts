// Produto.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Produto extends Model {
  public id!: number;
  public title!: string;
  public price!: string;
  public category!: string;
  public image!: string;
}

Produto.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
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
  },
  {
    sequelize,
    tableName: 'produtos',
    timestamps: true,  
    underscored: true,  
  }
);

export default Produto;
