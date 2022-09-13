const { Router } = require('express');
const rutaPokemon = require("./Pokemons")
const rutaType = require("./Types")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", rutaPokemon)
router.use("/types", rutaType)



module.exports = router;
