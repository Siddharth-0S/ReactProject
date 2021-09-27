import { Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";


function App() {

  return(
    <>
    
     <Route path='/' exact component={Home}/>
     <Route path='/contact' exact component={Contact}/>
     
  
    </>
    
  );
}
export default App;