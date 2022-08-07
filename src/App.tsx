// Styles
import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { Chihuahua } from './pages/Chihuahua';
import { List } from './pages/List';
import { Register } from './pages/Register';

import './styles/global.css';

function App() {

  const {user} = useContext(AuthContext);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {user.token ? (<Route path='/list' element={<List />} />)
          : (<Route path='/' element={<Register />} />)}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;