// Página de registro

// Componentes
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Register = () => {

    return (
        <div className="register">
          <Input 
            name="email"
            type='email'
          />
          <Button>Login</Button>

        </div>
      );
};

export {Register};