import React from 'react';
import styles from '../../style.module.scss'

//import component
import {eventName,eventYear} from '../../../../../Config/EventDetail/index';

const objek = {
    staff : [],
    bph : []
}

export default function HeaderHome(props){
    return (
        <header className={styles.top} style={{backgroundImage:`url("./img/filafest-min.jpg")`}}>
            <div className={styles.headercontain}>
                <div className={styles.welcome}>{`${eventName} ${eventYear}`}</div>
                <span className={`${styles.arrow} ${styles.animated} ${styles.bounce}`}></span>
            </div>
        </header>
    );
}