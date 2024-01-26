import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import User from './user.model'; // Certifique-se de importar corretamente o modelo do usuário

class Token extends Model {
  public id!: number;
  public user_id!: number;
  public token!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    token: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'Tokens',
    sequelize,
  }
);

export default Token;
