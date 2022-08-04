import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";

export function NotAuth(){

    return(
        <Routes location='/register'>
            <Route path='register' element={<Register />} />
        </Routes>
    );
};