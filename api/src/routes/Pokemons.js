const { Router } = require("express");
const getAllPokemons = require("../middle/getPokemon");
const router = Router();
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let name = req.query.name; //Recibo la request en una variable
    let AllPokemons = await getAllPokemons(); //Guardo mi controlador que trae todos los pokemons en una variable..
    if (name) { //Consulto si me pasan un nombre y lo busco en la variable de arriba
      let pokemonName = await AllPokemons.filter((e) => 
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      pokemonName.length
        ? res.status(200).send(pokemonName) // Si lo encuentro lo devuelvo,
        : res.status(404).send("Pokemon not found, does not exist"); // y sino devuelvo el texto.
    } else {
      res.status(200).send(AllPokemons); //Sino devuelvo todos los pokemons
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => { //Busqueda por id
  try {
    const id = req.params.id;
    const AllPokemons = await getAllPokemons();
    if (id) { //Si me pasan un ID, filtro el que coincida con ese mismo, sino devuelvo texto.
      let pokemonId = AllPokemons.filter((e) => e.id == id); 
      pokemonId.length
        ? res.status(200).json(pokemonId)
        : res.status(404).send("The pokemon was not found");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => { //Ruta de creacion del pokemon
  try {
    let { name, image, life, attack, defense, speed, height, weight, types} = req.body //Datos que necesito pedir

    const newPokemon = await Pokemon.create({
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    if (!name) return res.json({ info: "Name is required" });

    if(Array.isArray(types) && types.length){ //Consulto si lo que me llega en TYPES, es un arreglo y si tiene algo adentro.
      let dbTypes = await Promise.all( //Armo una variable que dentro tendra una resolucion de promesas
        types.map((e) => { // Agarro la data de types y le hago un map para verificar que cada elemento exista en 
          return Type.findOne({where:{ name: e}}) // nuestra tabla de tipos
        })
      )
     await newPokemon.setTypes(dbTypes) //Una vez que se resuelva la promesa del Pokemon.create, le agrego los tipos

     return res.send("Pokemon successfully created");
    }
  } catch (err) {
    res.status(400).send("Error en los datos ingresados");
  }
})


module.exports = router;
