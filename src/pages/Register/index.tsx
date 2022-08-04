// Página de registro

// Styles
import './style.css';

// Componentes
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Register = () => {

    return (
        <div className="register">
          <Input 
            name="email"
            type='email'
          />
          <Button type='submit'>Login</Button>
        </div>
      );
};

export {Register};