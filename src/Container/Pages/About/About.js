import React, { useState, useEffect } from 'react';

//import components
import { Grid } from "semantic-ui-react";
import {LeftSide,RightSide} from './Components';
import {useHistory} from 'react-router-dom';

export default function About(props) {
    const [checked, setChecked] = useState(false);

    let history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (checked === true) {
            history.replace("/login");
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Grid columns={2} containers stackable style={{ marginTop: 0 }}>
            <LeftSide />
            <RightSide submit={onSubmitHandler} checked={checked} setChecked />
        </Grid>
    )
}