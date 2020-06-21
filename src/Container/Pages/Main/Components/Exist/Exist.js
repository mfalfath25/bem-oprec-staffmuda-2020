import React, {useState,useEffect} from 'react';

//import components
import {Registered,Rejected,Accepted} from '../../Components'

export default function Exist(props){
    const [pengumuman,setPengumuman] = useState(false);
    const [status,setStatus] = useState(0)

    if(pengumuman === false){
        return(
            <Registered/>
        )
    } else {
        return status===0 ? <Rejected/> : <Accepted/> 
    }
}