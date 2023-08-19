const { Router } = require("express");
const router = Router(); //localhost:3000/category

router.get("/", (req, res) => {
  res.send("RUTA CATEGORIES");
});

module.exports = router;
