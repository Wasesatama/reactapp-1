import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import { render } from '@testing-library/react';

function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/add'></Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <Routing></Routing>
  )
}

export default App;
