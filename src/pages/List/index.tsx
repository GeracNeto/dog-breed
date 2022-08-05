import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chihuahua } from "../Chihuahua";

// Styles
import './style.css';

const List = () => {

    return(
        <div className="list">
            <ul>
                <Link to='chihuahua'><li>Chihuahua</li></Link>
                <Link to='Husky'><li>Husky</li></Link>
                <Link to='Labrador'><li>Labrador</li></Link>
                <Link to='Pug'><li>Pug</li></Link>
            </ul>
        </div>
    );
};

export {List};
