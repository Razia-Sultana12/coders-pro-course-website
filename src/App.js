import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

import Services from './Components/Services/Services';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Offer from './Components/Offer/Offer'
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    
      <div>
        <Router>
        <Header></Header>
        <Switch>
      <Route exact path="/">
       <Home></Home>
     </Route>
     <Route exact path="/home">
       <Home></Home>
       </Route>
     <Route exact path="/services">
       <Services></Services>
     </Route>
     <Route exact path="/service">
       <Services></Services>
      </Route>
     <Route exact path="/about">
       <About></About>
     </Route>
     <Route exact path="/offer">
       <Offer></Offer>
     </Route>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
     
     </Switch>
     </Router>
     <Footer></Footer>
        
          
      </div>
  );
}

export default App;
