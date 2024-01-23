// Estatisticas.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Estatisticas extends Model {
  public id!: number;
  public visualizacoes!: number;
  public estoque!: number;
  public produto_id!: number; // Altere o nome da coluna para produto_id
}

Estatisticas.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
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
    produto_id: { // Altere o nome da coluna para produto_id
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
