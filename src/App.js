import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Register from './pages/Register';
import Communicate from './pages/Communicate';
import Quotes from './pages/Quotes';
import { useState } from 'react';
import Slider from './pages/Slider';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggleMoon = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <>
     <Router>
    <Navbar isNightMode={isNightMode} handleToggleMoon={handleToggleMoon} ></Navbar>
   
    <Routes>
  
   
 
    
   <Route path='/' exact element={<Home/>}/>
    <Route path='/quotes' element={<Quotes isNightMode={isNightMode}/>}/>
    <Route path='/communicate' element={<Communicate  isNightMode={isNightMode}/>}/>
    <Route path='/Register' element={<Register isNightMode={isNightMode}/>}/>
    <Route path='/Slider' element={<Slider />}/>
   </Routes>
   </Router>
    </>
  );
}

export default App;
