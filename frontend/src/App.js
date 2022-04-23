import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './home/home';
import Register from "./register/register";


function App() {
  return (

   
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/register' exact element = {<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  
  );
}

export default App;
