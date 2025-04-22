import './App.css';
import Login from './features/Login/Login';
import Register from './features/Register/Register';
import Cart from './pages/Cart/Cart';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route, BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<></>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;