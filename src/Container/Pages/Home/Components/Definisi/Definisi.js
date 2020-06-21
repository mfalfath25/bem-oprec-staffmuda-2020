import React from 'react';

//import component
import { Grid, Header, Icon, Placeholder } from "semantic-ui-react";
import {definisi} from '../../../../../Config/EventDetail';


export default function Definisi(props) {
    return (
        <React.Fragment>
            <Header as='h1' style={{ marginBottom: 0 }}>
                <Icon name='info circle' />
                <Header.Content>
                    {definisi.teks1}
                    <Header.Subheader>{definisi.teks2}</Header.Subheader>
                </Header.Content>
            </Header>
            <br />
            <Grid centered style={{ marginTop: 5 }}>
                <Placeholder.Paragraph style={{ marginLeft: 40, marginRight: 40 }}>
                    <p style={{ fontSize: 15, fontWeight: 1500, textAlign: "justify" }}>
                        {definisi.teks3}
                    </p>
                </Placeholder.Paragraph>
            </Grid>
        </React.Fragment>
    );
}