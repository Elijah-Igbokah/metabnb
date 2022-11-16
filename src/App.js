import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer.component';
import NavBar from './components/NavBar/navbar.component';
import Homepage from './Pages/Homepage/Homepage';
import PlacesToStay from './Pages/Places-To-Stay/PlacesToStay';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/placeToStay' element={<PlacesToStay />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
