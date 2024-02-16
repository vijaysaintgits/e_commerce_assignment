import { sequelize } from './../config/sequelize-config';
import { DataTypes, Sequelize } from 'sequelize';
import { cust_supp } from '../../types/modelTypes/customer_supplier';

cust_supp.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 

    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Pending",
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
        modelName:'cust_supp',
        tableName:'cust_supp',
        indexes: [
          {
              unique: true,
              fields: ['customer_id', 'supplier_id'],
          },
      ]
      }
    )

    export default cust_supp;