import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addstudent1 from './Component/Addstudent1';
import Searchstudent from './Component/Searchstudent';

import Header from './Component/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <>

 
   <BrowserRouter>
   <Routes>
     <Route path="/" exact element={<Addstudent1/>}/>
     <Route path="/search" exact element={<Searchstudent/>}/>
   </Routes>
   </BrowserRouter>

  <Searchstudent/>

    </>
    
  );
}

export default App;
