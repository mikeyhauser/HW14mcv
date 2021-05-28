const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw){
        //this takes in loginPW and bcrypts
        return bcrypt.compareSync(loginPw, this.password);
    }
 }

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

  
},
// {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'User'
// }
{
    hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      sequelize,
      timestamps:false,
      freezeTableName: true,
      underscored: true,
      modelName: 'User'

}
);

module.exports = User;