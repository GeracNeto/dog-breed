// Página de registro
import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './style.css';

// Componentes
import { LoginButton } from "../../components/LoginButton";
import { Input } from "../../components/Input";

// API
import { api } from '../../service/api';
import { AuthContext } from '../../context/AuthContext';

// Images
import Dog from "../../assets/images/dog.png";

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
            <img src={Dog} alt="Dog-img" />
            <Input 
              name="email"
              type='email'
              placeholder='Enter email'
              autoFocus
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <LoginButton type='submit'>Login</LoginButton>
          </div>
        </fieldset>
      </form>
  );
};

export {Register};