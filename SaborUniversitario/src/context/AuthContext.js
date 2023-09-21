import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'


export const AuthContext= createContext( {
    auth: undefined,
});

export function AuthProvider(props){
    const {children} = props;
    const [auth,setAuth] = useState(undefined);

    const login = (userData) =>{
        setAuth(userData);
    };

    const logout = () =>{
        setAuth({});
    };

    const valueContext={
        auth,
        login,
        logout,
    };
    return(
        <AuthContext.Provider value={valueContext}>
                {children}
        </AuthContext.Provider>
    )
}