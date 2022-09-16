const initialState = {
  pokemons: [],
  allPokemons: [],
  detail: [],
  types: [],
  
  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS": 
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case "FILTER_BY_TYPE":
      const allPokemons = state.allPokemons;
      const typeFiltered =
        action.payload === "type"
          ? allPokemons
          : allPokemons.filter((e) => e.types.includes(action.payload));
      return {
        ...state,
        pokemons: typeFiltered,
      };
    case "FILTER_CREATED":
      let copy = state.allPokemons;
      let createdFiltered;
      if (action.payload === 'Creados') {
          createdFiltered = copy.filter(e => e.createdInBd);
      } else if (action.payload === 'Todos') {
          createdFiltered = copy.filter(e => !e.createdInBd);
      } else {
          createdFiltered = copy;
      }
      return {
          ...state,
          pokemons: createdFiltered
      };
   
    case "POST_POKEMON":      
      return {       
      };
    case "SORT":
      let orderedCharacters
      
      if(action.payload === "asc"){
        orderedCharacters = state.allPokemons.slice().sort((a,b) => a.name.localeCompare(b.name));
      }
      if(action.payload === "des"){
        orderedCharacters = state.allPokemons.slice().sort((a,b) => b.name.localeCompare(a.name));
      }
      if(action.payload === "may"){               
        orderedCharacters = state.allPokemons.slice().sort((a,b) => a.attack-b.attack);     
        }
      if(action.payload === "men"){
        orderedCharacters = state.allPokemons.slice().sort((a,b) => b.attack-a.attack);
      }

      return{
        ...state,
        pokemons:
        orderedCharacters || state.allPokemons
      }
   
    case "SEARCH_NAME":
      return {
        ...state,
        pokemons: action.payload 
      };

   
    
   
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_TYPE":
      return {
        ...state,
        types: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
