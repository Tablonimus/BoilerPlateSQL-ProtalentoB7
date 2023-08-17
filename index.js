const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const server = express(); //=> {}.get .post .use()
const port = 3000; // en mi pc lo corro en el localhost:
/* ------MIDDLEWARES---------------------------------------------------------- */
/* middleware para aceptar jsons */
/* paso1 = instalar con npm install body-parser */
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
/* ----------------------CORS----------------------------------------- */
server.use(cors());
/*-------------SEQUELIZE--------------------------------------------------------*/
/* VARIABLES DE ENTORNO */
const USER_DB = "postgres";
const PASS_DB = "1234";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "carStore";
/* ------------------- */

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/carStore')
const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`
);
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Estas conectado a la base de datos");
  } catch (error) {
    console.error("No es posible conectarse a la base de datos:", error);
  }
}

testConnection();

//1-CREAR UN ARRAY CON 10 PRODUCTOS Y AL MENOS 5 CLAVES
let marketProducts = [
  {
    id: 1,
    name: "Ferrari 4 puertas",
    color: "red",
    price: 150,
    stock: 25,
  },
  {
    id: 2,
    name: "Lamborgini Diablo",
    color: "yellow",
    price: 100,
    stock: 5,
  },
  {
    id: 3,
    name: "Chevrolet Camaro",
    color: "yellow",
    price: 200,
    stock: 10,
  },
];

//2- HACER UN FILTRADO POR QUERY
server.get("/product", (req, res) => {
  //1- Filtrar por query los colores //
  //2- Filtrar por query los precios / maxPrice
  //3- Filtrar por query los stock
  try {
    let color = req.query.color;
    let maxPrice = req.query.price;
    let stock = req.query.stock;

    if (color) {
      let productFound = marketProducts.filter((car) => car.color === color);
      res.status(202).json(productFound);
    } else if (maxPrice) {
      let productFound = marketProducts.filter((car) => car.price <= maxPrice);
      res.status(202).json(productFound);
    } else if (stock) {
      let productFound = marketProducts.filter((car) => car.stock >= stock);
      res.status(202).json(productFound);
    } else {
      res.status(202).json(marketProducts);
    }
  } catch (error) {
    console.log("ESTE ES EL ERROR QUE OCASIONA TODO=====> ", error);
    res.status(404).json("NOT FOUND");
  }
});
//3- HACER UNA BUSQUEDA POR PARAMS
server.get("/product/:id", (req, res) => {
  try {
    //1-Filtrar segun param de name
    let id = Number(req.params.id);

    let productFound = marketProducts.find((car) => car.id === id);
    console.log(productFound);
    res.status(202).json(productFound);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error en la ejecucion de bucar por id");
  }
});

//4- CREAR UN PRODUCTO CON DATOS POR BODY (EXTRA)
server.post("/product", (req, res) => {
  try {
    let newProduct = req.body;

    console.log(newProduct);

    res.status(200).json("producto creado correctamente"); //al body de nuestro cliente
  } catch (error) {
    res.status(400).send("Error en crear producto");
  }
});

//5 - EDITAR UN PRODUCTO POR BODY(EXTRA)
server.patch("/product", (req, res) => {
  console.log("entrada a la ruta patch"); //se va a la consola
  res.send("Hello PATCH!"); //al body de nuestro cliente
});

/* Escucha del servidor */
server.listen(port, () => {
  console.log(`Esta corriendo el servidor correctamente en el puerto: ${port}`);
});
