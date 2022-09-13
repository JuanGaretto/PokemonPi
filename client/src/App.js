import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import EnterPag from "./EnterPag/EnterPage"
import Home from "./Home/Home"
import PokemonCreate from "./CreatePokemon/PokemonCreate";
import Detail from "./Detail/Detail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
         <Route exact path='/' component={EnterPag} />
        <Route exact path='/home' component={Home}  />
         <Route exact path="/home/:id" component={Detail}/>
        <Route  path='/create' component={PokemonCreate} />         
          </Switch>             
      </div>
      </BrowserRouter>
  );
}

export default App;
