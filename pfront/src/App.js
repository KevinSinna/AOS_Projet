                                  import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import {BrowserRouter,Route, Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path= "/" exact component={Home}/>
    <Route path= "/home" exact component={Home}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
