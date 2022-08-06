import { ReactNode, useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../service/api";
import { Chihuahua } from "../Chihuahua";

// Styles
import './style.css';

type DogProps = {
    breed: string;
    list: string[];
}

const List = () => {

    const {user} = useContext(AuthContext);

    const [breed, setBreed] = useState<string>('');
    const [dogs, setDogs] = useState<string[]>([]);

    useEffect(() => {
        // Retorna a lista das raças
         api.get<DogProps>('list', {
             headers:{ Authorization: user.token},
             params: {breed: breed}
           }).then(response => {
             console.log(response.data);
             setDogs(response.data.list);
           })
    }, [breed])

    return(
        <div className="list">
            <ul>
                <li onClick={() => setBreed('chihuahua')}>Chihuahua</li>
                <li onClick={() => setBreed('husky')}>Husky</li>
                <li onClick={() => setBreed('labrador')}>Labrador</li>
                <li onClick={() => setBreed('pug')}>Pug</li>
                
            </ul>
            {dogs.map((dog) => (<img src={dog} alt={breed} key={dog}/>))}          
        </div>
    );
};

export {List};

/*
                <Link to='chihuahua'><li>Chihuahua</li></Link>
                <Link to='husky' onClick={() => setBreed('husky')}><li>Husky</li></Link>
                <Link to='labrador'><li>Labrador</li></Link>
                <Link to='pug'><li>Pug</li></Link>
*/
