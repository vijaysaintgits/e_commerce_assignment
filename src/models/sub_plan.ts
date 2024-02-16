import { sequelize } from './../config/sequelize-config';
import { DataTypes, Sequelize } from 'sequelize';
import { SubPlan } from '../../types/modelTypes/sub_plan';

SubPlan.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    no_of_customers:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },    
    createdAt:{
      type:DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt:{
      type:DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },   
  },
  {
    sequelize,
    modelName:'sub_plan',
    tableName:'sub_plan',
  });

  export default SubPlan;
