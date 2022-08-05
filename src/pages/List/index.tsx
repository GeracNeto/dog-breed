import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chihuahua } from "../Chihuahua";

// Styles
import './style.css';

const List = () => {

    return(
        <div className="list">
            <ul>
                <li><Link to='chihuahua'>Chihuahua</Link></li>
                <li>Husky</li>
                <li>Labrador</li>
                <li>Pug</li>
            </ul>
        </div>
    );
};

export {List};

/*
        <div>
            <ul>
                <li>Chihuahua</li>
                <li>Husky</li>
                <li>Labrador</li>
                <li>Pug</li>
            </ul>
        </div>
*/