const express = require("express");
const server = express(); //=> {}.get .post
const port = 3000; // en mi pc lo corro en el localhost:

//RUTAS Y ENDPOINTS //
//http://localhost:3000
//req => request => pedido
//res => response => respuesta
//server.get("/endpoint", (req,res)=>{ res.send("respuesta que quiero")})

server.get("/product", (req, res) => {
  /* QUERY -  peticion req.query */
  // como armar un query =>luego del endpoint agregar ?clave=valor&clave=valor
  let order = req.query.order;
  if (order === "asc") {
    console.log("envio resultados ordenados ascendentes");
  }
  res.send("Hello GET!");
});

server.get("/product/:producto", (req, res) => {
  /* PARAMS - peticion de req.param */
  //let params = req.params //es un objeto que guarda los parametros como valores, OJO que params es string
  //con destructuring //INVESTIGAR :)
  //let { producto } = req.params;
  let producto = req.params.producto;
  console.log("Esta ruta me traeria el producto: ", producto);
  res.send("Coca-cola light");
});

server.post("/product", (req, res) => {
  console.log("entrada a la ruta post"); //se va a la consola
  res.send("Hello POST!"); //al body de nuestro cliente
});

server.patch("/product", (req, res) => {
  console.log("entrada a la ruta patch"); //se va a la consola
  res.send("Hello PATCH!"); //al body de nuestro cliente
});

server.delete("/product", (req, res) => {
  console.log("entrada a la ruta delete"); //se va a la consola
  res.send("Hello DELETE!"); //al body de nuestro cliente
});

/* Escucha del servidor */
server.listen(port, () => {
  console.log(`Esta corriendo el servidor correctamente en el puerto: ${port}`);
});
