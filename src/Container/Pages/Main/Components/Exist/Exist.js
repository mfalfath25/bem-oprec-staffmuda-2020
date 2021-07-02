import React, { useContext, useState, useEffect } from 'react';
import { Nodux } from '../../../../../Config/Context';

//import components
import {Registered,Rejected,Accepted} from '../../Components'

export default function Exist(props){
    const [pengumuman,setPengumuman] = useState(false);
    // const [status, setStatus] = useState(0)
    const [state, dispatch] = useContext(Nodux.AuthContext);

    if(false){
        return(
            <Registered/>
        )
    } else {
        return state.status === 0 ? <Rejected/> : <Accepted/> 
    }
}