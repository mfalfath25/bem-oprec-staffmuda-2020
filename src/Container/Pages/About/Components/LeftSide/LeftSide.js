import React from 'react';

//import components
import { Image, Grid } from "semantic-ui-react";

export default function LeftSide(props) {
    return (
        <Grid.Column
            verticalAlign="top"
            style={{
                backgroundColor: "white"
            }}
        >
            <Image
                className="ima"
                centered
                src="./img/LogoVertical.png"
                style={{
                    backgroundColor: "white",
                    border: "none",
                    width: "50%"
                }}
            />
        </Grid.Column>
    );
}