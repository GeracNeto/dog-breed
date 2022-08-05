import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chihuahua } from "../Chihuahua";

// Styles
import './style.css';

const List = () => {

    return(
        <div className="list">
            <ul>
                <li><Link to='chihuahua'>Chihuahua</Link></li>
                <li><Link to='Husky'>Husky</Link></li>
                <li><Link to='Labrador'>Labrador</Link></li>
                <li><Link to='Pug'>Pug</Link></li>
            </ul>
        </div>
    );
};

export {List};
