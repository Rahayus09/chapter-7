import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListCar from './pages/ListCar/ListCar';
import Navbar from '../src/components/Layouts/Navbar'
import AddCar from './pages/AddCar/AddCar';
import Details from './pages/Details/Details';
import Invoice from './pages/Invoice/Invoice';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
        <BrowserRouter>
          <Routes>
              <Route path='/' element ={<ListCar />}/>
                {/* <Route path='list' element= {<listCar />}/> */}
                <Route path='/add' element ={<AddCar />}/>
                <Route path='/details' element ={<Details />}/>
                <Route path='/list' element ={<ListCar />}/>
                <Route path='/invoice' element ={<Invoice />}/>
                <Route path='*' element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
