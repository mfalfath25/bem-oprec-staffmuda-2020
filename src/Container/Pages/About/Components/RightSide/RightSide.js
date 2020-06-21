import React from 'react';

//import components
import { Agreement, FormOffline, HeaderAbout, Poem, Prosedur } from '../../Components';
import { Segment, Grid } from "semantic-ui-react";

export default function RightSide(props) {
    return (
        <Grid.Column verticalAlign="middle">
            <Segment basic>
                <Prosedur />
                <FormOffline />
                <Agreement {...props} />
            </Segment>
        </Grid.Column>
    )
}