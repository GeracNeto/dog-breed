import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { List } from './pages/List';
import { Register } from './pages/Register';

// Components
import { Footer } from './components/Footer';
import { Header } from './components/Header';

// Styles
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