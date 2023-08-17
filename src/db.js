//sequelize
const { Sequelize } = require("sequelize");
const { Product } = require("./models/Product");

/* VARIABLES DE ENTORNO */
const USER_DB = "postgres";
const PASS_DB = "1234";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "donRufino";
/* ------------------- */

const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

module.exports = { conn: sequelize };

//// FUNCION PARA TESTEAR CONNECTION A DB
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Estas conectado a la base de datos");
//   } catch (error) {
//     console.error("No es posible conectarse a la base de datos:", error);
//   }
// }
// testConnection();
