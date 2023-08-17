const { Sequelize } = require("sequelize");
const Product = require("./models/Product");
const Category = require("./models/Category");
// ⚠ IMPORTO LA FUNCION DEL MODELO PARA SINCRONIZAR Y EVITAR MULTIPLES NEW SEQUELIZE EN CADA ARCHIVO

/* VARIABLES DE ENTORNO */
const USER_DB = "postgres";
const PASS_DB = "1234";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "donRufino";

/* Inicio una instancia de sequelize y conecto con la base de datos */
const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
  {
    logging: false, // cambiar a true para ver las query que se ejecutan desde la consola
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

/* Aquí ejecuto la función importada de cada modelo y paso sequelize como argumento */
Product(sequelize);
Category(sequelize);

/* Exporto sequelize */
module.exports = sequelize;
