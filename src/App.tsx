// Styles
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chihuahua } from './pages/Chihuahua';
import { List } from './pages/List';
import { Register } from './pages/Register';
import { api } from './service/api';


import './styles/global.css';


function App() {

  const [userToken, setUserToken] = useState<string>(); // Variável para armazenar o token do usuário registrado

    // Função que faz o método POST para postar o email do usuário na API
  const postEmail = async(email: string) => {

    await api.post('register', {
      email: email
    }).then(response => {
      setUserToken(response.data.user.token);
      getList(response.data.user.token);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getList = async (token: string) => {

    await api.get('list', {
      headers:{ Authorization: token}
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register postEmail={postEmail}/>} />
          <Route path='/list' element={<List />} />
          <Route path='/list/chihuahua' element={<Chihuahua />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
