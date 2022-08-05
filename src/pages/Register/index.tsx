// Página de registro
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './style.css';

// Componentes
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

//API
import { api } from '../../service/api';

const Register = () => {

  const [email, setEmail] = useState<string>(''); // Variável para armazenar o email do usuário
  const [userToken, setUserToken] = useState<string>(); // Variável para armazenar o token do usuário registrado

  const navigate = useNavigate();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    api.post('register', {
    email: email
  }).then(response => {
    setUserToken(response.data.user.token);
    console.log(response.data);
    navigate('/list');
  }).catch(error => {
    console.log(error);
  })
}

  return (
    <form className="register" onSubmit={handleLogin}>
      <Input 
        name="email"
        type='email'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Button type='submit'>Login</Button>
    </form>
  );
};

export {Register};