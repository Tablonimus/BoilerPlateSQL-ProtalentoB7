const { Sequelize, DataTypes, UUIDV4 } = require("sequelize");
const { conn } = require("../db");

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

const Product = sequelize.define(
  "Product",
  {
    //   id: {
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV4,
    //     primaryKey: true,
    //   },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);



module.exports = { Product };
