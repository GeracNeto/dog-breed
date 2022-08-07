import { createContext, ReactNode, useMemo, useState } from "react";
import { api } from "../service/api";

type UserProps = {
    _id: string;
    email: string;
    token: string;
}

type AuthProps = {
    user: UserProps
}

type AuthContextData = {
    signIn: (email: string) => Promise<void>;
    user: UserProps;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {

   const [user, setUser] = useState<UserProps>({} as UserProps);

   const signIn = async(email: string) => {

        try {
            const response = await api.post<AuthProps>('register', {
                email: email
            })
            const {user} = response.data;
            console.log('Usuário criado:');
            console.log(user);
            setUser(user);
            // setUser(response.data.user)
        } catch (error) {
            console.log(error);
        }
   }

   const value = useMemo(() => ({
    user,
    signIn
   }), [user])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

