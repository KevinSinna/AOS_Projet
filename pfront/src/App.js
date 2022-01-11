import './App.css';
import Home from './page/Home';
import Service from  './page/Service';
import {BrowserRouter,Route, Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path= "/" exact component={Home}/>
    <Route path= "/home" exact component={Home}/>
    <Route path= "/Service" exact component={Service}/>
    </Switch>
  </BrowserRouter>
  );
}
export default App;