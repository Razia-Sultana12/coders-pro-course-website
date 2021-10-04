import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
function App() {
  return (
    
      <div>
       <Router>
         <Header></Header>
         <NotFound></NotFound>
         
       
<Switch>
  <Route path="/header">
       <Header></Header>
     </Route>
     <Route path="/home">
       <Home></Home>
       </Route>
     <Route path="/services">
       <Services></Services>
     </Route>
     <Route path="/about">
       <About></About>
     </Route>
     <Route path="/footer">
       <Footer></Footer>
     </Route>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
     </Switch>
     <Footer></Footer>
 </Router>
        
          
      </div>
  );
}

export default App;
