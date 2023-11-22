import './App.css';
import Allover from './pages/Home/Allover';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Purchase from './pages/Purchase';
import Products from './pages/Home/Products';
import Combo from './pages/Home/Combo';
import Erorr from './pages/Erorr';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Allover/>}/>
      <Route path='/purchase' element={<Purchase/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/combo' element={<Combo/>}/>
      <Route path='*' element={<Erorr/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
