
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Product from './Components/Pages/Product'
import SingUp from './Components/Pages/SingUp'
function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact  component={Home}/>
            <Route path='/services'  component={Services}/>
            <Route path='/product'   component={Product}/>
            <Route path='/Sing-up'   component={SingUp}/>
          </Switch>
        </Router>
    </>
  );
} 

export default App;
