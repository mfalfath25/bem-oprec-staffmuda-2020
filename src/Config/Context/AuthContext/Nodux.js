import React, { createContext, useReducer } from 'react';
import reducer from "./reducer";

function Nodux() {

    //initial state
    const initialState = {
        nim : '',
        nama : '',
        prodi : '',
        isLogged : false
    };

    const AuthContext = createContext(initialState); //create context

    //create provider
    const AuthProvider = (props) => {
        const store = useReducer(reducer, initialState); // [state, dispatch]
        return (
            <AuthContext.Provider value={store}>
                {props.children}
            </AuthContext.Provider>
        )
    }

    //return object
    return {
        AuthProvider,
        AuthContext
    }
}

export default Nodux();