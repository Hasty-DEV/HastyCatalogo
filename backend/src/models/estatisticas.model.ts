import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Estatisticas extends Model {
  public id!: number;
  public visualizacoes!: number;
  public estoque!: number;
  public carrinho!: number;
  public produto_id!: number;
}

Estatisticas.init(
  {
    visualizacoes: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    estoque: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    carrinho: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    produto_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'estatisticas',
    timestamps: true,
    underscored: true,
  }
);

export default Estatisticas;
