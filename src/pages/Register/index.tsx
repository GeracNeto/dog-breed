// Página de registro
import { useState } from 'react';

// Styles
import './style.css';

// Componentes
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

type RegisterProps = {
  postEmail: any
}

const Register = ({ postEmail }: RegisterProps) => {

  const [email, setEmail] = useState<string>(); // Variável para armazenar o email do usuário

  return (
    <div className="register">
      <Input 
        name="email"
        type='email'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Button type='submit' onClick={() => postEmail(email)}>Login</Button>
    </div>
  );
};

export {Register};