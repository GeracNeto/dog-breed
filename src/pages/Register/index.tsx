// Página de registro
import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './style.css';

// Componentes
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

//API
import { api } from '../../service/api';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {

  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState<string>(''); // Variável para armazenar o email do usuário
  const [userToken, setUserToken] = useState<string>(); // Variável para armazenar o token do usuário registrado

  const navigate = useNavigate();

  const handleLogin = async(event: FormEvent) => {
    event.preventDefault();

    await signIn(email);
    navigate('/list');
}

  return (
      <form className="register" onSubmit={handleLogin}>
        <fieldset>
          <div className='register-container'>
            <h1>Welcome</h1>
            <Input 
              name="email"
              type='email'
              placeholder='Enter email'
              autoFocus
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <Button type='submit'>Login</Button>
          </div>
        </fieldset>
      </form>
  );
};

export {Register};