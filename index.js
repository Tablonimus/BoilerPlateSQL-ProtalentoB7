const server = require("./src/server");
const { conn } = require("./src/db");
const { Product } = require("./src/models/Product");
const port = 3000; // en mi pc lo corro en el localhost:

conn.sync().then(
  server.listen(port, () => {
    console.log(
      `Esta corriendo el servidor correctamente en el puerto: ${port}`
    );
  })
);


