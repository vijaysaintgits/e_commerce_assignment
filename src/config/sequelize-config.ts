import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize({
    database: 'e_commerce_assignment',
    username: 'root',
    password: 'experion@123',
    host: '127.0.0.1',
    dialect: 'mysql',
  });

  export default {sequelize};