// Página de List

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

// Components
import { NavigateButton } from "../../components/NavigateButton";

// API
import { api } from "../../service/api";

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
    const [sum, setSum] = useState<number>(0);

    const handleBack = () => {
        if(sum > 0){
            setSum(sum-1);
        }
    }

    const handleNext = () => {
        if(sum < dogs.length-1){
            setSum(sum+1);
        }
        else{
            setSum(0);
        }
    }

    useEffect(() => {
        // Retorna a lista das raças
         api.get<DogProps>('list', {
             headers:{ Authorization: user.token},
             params: {breed: breed}
           }).then(response => {
             console.log(response.data);
             setDogs(response.data.list);
           })
    }, [breed]);

    return(
        <div className="list">
            <ul className="list-breed">
                <li onClick={() => setBreed('chihuahua')}>Chihuahua</li>
                <li onClick={() => setBreed('husky')}>Husky</li>
                <li onClick={() => setBreed('labrador')}>Labrador</li>
                <li onClick={() => setBreed('pug')}>Pug</li>
                
            </ul>
            <div className="photos">
                    <img src={dogs[sum]} alt="Dogs-Photos"/>
                <div className="buttons">
                    <NavigateButton onClick={handleBack}>Back</NavigateButton>
                    <NavigateButton onClick={handleNext}>Next</NavigateButton>
                </div>
            </div>
                      
        </div>
    );
};

export {List};