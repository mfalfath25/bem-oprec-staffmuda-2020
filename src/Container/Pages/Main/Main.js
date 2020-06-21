import React from 'react';

//import components
import { useParams } from 'react-router-dom';
import {Exist,NotExist} from './Components'

export default function Main(props){
	let { kondisi } = useParams();
    return kondisi === 'terdaftar' ? <Exist/> : <NotExist/>
}