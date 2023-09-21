import dotenv from 'dotenv'
dotenv.config()
const {CONNECTION_STRING} = process.env
import Sequelize from 'sequelize'

const sequelize = new Sequelize(CONNECTION_STRING, {
    logging: console.log, // set logging: false to disable outputting SQL queries to console
    dialect: 'postgres',
    define: {
      timestamps: false, // don't want created_at or updated_at columns
      underscored: true, // use snake_case rather than camelCase column names
    },
  })

export {
    sequelize
}