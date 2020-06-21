import React, {useState} from 'react';

//import components
import {FormOnline,Closed} from '../../Components';

export default function NotExist(props){
    const [tutup,setTutup] = useState(false);
    return tutup ? <Closed/> : <FormOnline/>
}