import './App.css';
import CardForm from './components/CardForm';
import Navbar from './components/Navbar';

import Body from './components/Body';

import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';


 

function App() {

 

  return (
    <>
   
    <Navbar/>
    <Routes>
        
          <Route path='/' element={<Body />} />

        <Route path='/newitem' element={<CardForm/>} />
      </Routes>
    <Footer/>
    
    
    
    </>
    
  );
}

export default App;
