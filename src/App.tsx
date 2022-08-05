// Styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chihuahua } from './pages/Chihuahua';
import { List } from './pages/List';
import { Register } from './pages/Register';

import './styles/global.css';

function App() {

/*
  const getList = (token: string) => {

      api.get('list', {
      headers:{ Authorization: token}
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  }
*/

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/list' element={<List />} />
          <Route path='/list/chihuahua' element={<Chihuahua />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
