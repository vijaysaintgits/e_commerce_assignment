import { sequelize } from './../config/sequelize-config';
import { DataTypes, Sequelize } from 'sequelize';
import { SuperAdmin } from '../../types/modelTypes/super_admin';
import bcrypt from 'bcrypt';

SuperAdmin.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    e_mail:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    profile_pic:{
      type:DataTypes.STRING, 
      allowNull: true,
      defaultValue:"PIC", 
    },
    registration_id:{
      type:DataTypes.STRING,
      allowNull: true,
      unique:true,
      defaultValue: 1,
    },
    registration_time_stamp:{
      type:DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
    modelName:'super_admin',
    tableName:'super_admin',
    hooks:{
      beforeCreate: (user:SuperAdmin)=>{
        //hash the password using bycrypt before creating the record
        const hashedPassword = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10));
        user.password= hashedPassword
      },
    }
  });

  export default SuperAdmin;