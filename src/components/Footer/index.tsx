// Styles
import './style.css';

// Images
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";

const Footer = () => {

    return(
        <footer>
            <p>Powered by: Geraldo Pereira da Costa Neto</p>
            <a href="https://www.linkedin.com/in/geraldo-costa-5568a8152/" target='_blank'><img src={Linkedin} alt="Linkedin-img" /></a>
            <a href="https://github.com/GeracNeto" target='_blank'><img src={Github} alt="Github-img" /></a>
        </footer>
    );
};

export {Footer};