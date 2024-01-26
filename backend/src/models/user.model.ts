import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class User extends Model {
  public id!: number;
  public fullName!: string;
  public cpf!: number;
  public email!: string; // Adicionado o campo 'email'
  public password!: string;
  public companyPassword!: string;
  public role!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    email: {
      type: new DataTypes.STRING(128), // Adicionado o campo 'email'
      allowNull: false,
      unique: true, // Garante que cada email seja único na tabela
      validate: {
        isEmail: true, // Adicionado validação de formato de email
      },
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    companyPassword: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    role: {
      type: new DataTypes.STRING(128),
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
    tableName: 'Users',
    sequelize,
  }
);

export default User;
