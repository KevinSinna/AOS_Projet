import './App.css';
import Home from './page/Home';
import {BrowserRouter,Route, Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path= "/" exact component={Home}/>
    <Route path= "/home" exact component={Home}/>
    <Route exact path="/logout" render={() => (<div>logout</div>)} />
    </Switch>
  </BrowserRouter>
  );
}
export default App;
