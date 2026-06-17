import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface ApplicationAttributes {
  id: number;
  company_name: string;
  job_title: string;
  job_type: 'Internship' | 'Full-time' | 'Part-time';
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  applied_date: Date;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ApplicationCreationAttributes
  extends Optional<ApplicationAttributes, 'id' | 'created_at' | 'updated_at'> {}

export class Application extends Model,
  ApplicationAttributes,
  ApplicationCreationAttributes
 implements ApplicationAttributes {
  public id!: number;
  public company_name!: string;
  public job_title!: string;
  public job_type!: 'Internship' | 'Full-time' | 'Part-time';
  public status!: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  public applied_date!: Date;
  public notes?: string;
  public created_at?: Date;
  public updated_at?: Date;
}

export const initApplicationModel = (sequelize: Sequelize): typeof Application => {
  Application.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      company_name: { type: DataTypes.STRING, allowNull: false },
      job_title: { type: DataTypes.STRING, allowNull: false },
      job_type: { type: DataTypes.ENUM('Internship', 'Full-time', 'Part-time'), allowNull: false },
      status: { type: DataTypes.ENUM('Applied', 'Interviewing', 'Offer', 'Rejected'), allowNull: false, defaultValue: 'Applied' },
      applied_date: { type: DataTypes.DATE, allowNull: false },
      notes: { type: DataTypes.TEXT, allowNull: true },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      tableName: 'applications',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Application;
};