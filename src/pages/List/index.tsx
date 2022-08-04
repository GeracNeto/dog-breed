import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chihuahua } from "../Chihuahua";

const List = () => {

    return(
        <div>
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