// Styles
import './style.css';

// Images
import Pegada from "../../assets/images/pegada.png";

const Header = () => {

    return(
        <header>
            <h1>
                <img src={Pegada} alt="dog-paw-" />
                <a href="https://gitlab.com/q9-tecnologia/desafios/mobile/desafio-dogbreed" target='_blank'>Desafio Dog Breed</a>
                <img src={Pegada} alt="dog-paw" />
            </h1>
        </header>
    );
};

export {Header};