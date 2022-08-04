// Styles
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chihuahua } from './pages/Chihuahua';

import { Auth } from './routes/Auth';
import { NotAuth } from './routes/NotAuth';

import './styles/global.css';


function App() {

  const [test, setTest] = useState<boolean>(false)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotAuth />} />
          <Route path='/list' element={test ? (<Auth />) : (<h1>404</h1>) } />
          <Route path='/list/chihuahua' element={<Chihuahua />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
