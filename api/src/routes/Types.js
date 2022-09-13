const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");
const {API_KEY_TYPE} = process.env
const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const api = await axios.get(API_KEY_TYPE); //Trae todos los tipos
    const types = await api.data // trae la respuesta en data
    for (type of types.results) { //Entra a la propiedad results, a cada elemento..
      const buscar = await Type.findOne({ where: {name: type.name}}); // Entra a la propiedad name y busca si ya existe 
      if (!buscar)  { // Si no lo encuentra..
        await Type.create({ name: type.name }); //Lo agrega a la base de datos
      } else {
        return res.json(await Type.findAll()) // Sino devuelve todos los tipos
      }
    }
    res.json(await Type.findAll()); //Finalmente devuelvo todos los tipos de la Db.
  } catch (error) {
    next(error);
  }
});


module.exports = router;