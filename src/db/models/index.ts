import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface ApplicationAttributes {
  id: number;
  company_name: string;
  job_title: string;
  job_type: 'Internship' | 'Full-time' | 'Part-time';
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  applied_date: Date;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApplicationCreationAttributes
  extends Optional<ApplicationAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Application
  extends Model<ApplicationAttributes, ApplicationCreationAttributes>
  implements ApplicationAttributes {
  declare id: number;
  declare company_name: string;
  declare job_title: string;
  declare job_type: 'Internship' | 'Full-time' | 'Part-time';
  declare status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  declare applied_date: Date;
  declare notes?: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

export const initApplicationModel = (sequelize: Sequelize): typeof Application => {
  Application.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      company_name: { type: DataTypes.STRING, allowNull: false },
      job_title: { type: DataTypes.STRING, allowNull: false },
      job_type: { type: DataTypes.ENUM('Internship', 'Full-time', 'Part-time'), allowNull: false },
      status: {
        type: DataTypes.ENUM('Applied', 'Interviewing', 'Offer', 'Rejected'),
        allowNull: false,
        defaultValue: 'Applied',
      },
      applied_date: { type: DataTypes.DATE, allowNull: false },
      notes: { type: DataTypes.TEXT, allowNull: true },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      tableName: 'applications',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Application;
};