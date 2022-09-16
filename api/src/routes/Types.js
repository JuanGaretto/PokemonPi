const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");
const router = Router();


router.get('/', async (req, res) => {
  try {
      let apiType = await axios.get('https://pokeapi.co/api/v2/type');
      let apiTypeInfo = apiType.data;
      let types = apiTypeInfo.results.map(e => e.name);
      types.forEach(type => {
          Type.findOrCreate({
              where: {
                  name: type,
              }
          });
      });
      const allTypes = await Type.findAll();
      return res.status(200).send(allTypes);
  } catch (e) {
      console.log(e);
  };
});



module.exports = router;