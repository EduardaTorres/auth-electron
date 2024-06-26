import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="/login" element={<Login />}></Route>
          <Route  path="/register" element={<Register />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}