import React from 'react';

//import components
import { Header } from "semantic-ui-react";

export default function HeaderAbout(props) {
    return (
        <Header as='h1' style={{ marginBottom: 5 }}>
            <Header.Content style={{ color: "#1B1E83" }}>
                SELAMAT DATANG
            </Header.Content>
        </Header>
    )
}