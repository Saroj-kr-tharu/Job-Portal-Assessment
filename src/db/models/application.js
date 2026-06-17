'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Application.init({

    company_name: {
        type: DataTypes.STRING,
         allowNull: false,
      },
      job_title: {
        type: DataTypes.STRING,
         allowNull: false,
      },
      job_type: {
        type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
         allowNull: false,
      },
      applied_date: {
        type: DataTypes.DATE,
        
      },
      notes: {
        type: DataTypes.STRING
      },
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};