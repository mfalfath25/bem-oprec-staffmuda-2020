import React from 'react';

//import components
import { Header, Button } from "semantic-ui-react";

export default function FormOffline(props) {
    return (
        <>
            <Header as='h2' style={{ marginBottom: 2.5, color: "#1B1E83" }}>
                {props.judul}
            </Header>

            <p style={{ color: "#333", fontSize: 18, fontWeight: 600 }}>
                Silahkan baca dan download berkas offline berikut
            </p>
            
            < center >
                <a href="https://drive.google.com/drive/folders/1YteAbb2Pp5OQOq4H4UUJbaj5TV1e16uy?usp=sharing" target="_blank" style={{ 'color': 'white' }}>
                    <Button
                        size="medium"
                        style={{ marginBottom: 20, width: 150, backgroundColor: "#1897D4", color: "#ffffff" }}
                    >
                        Berkas Offline
                    </Button>
                </a>
            </center >
        </>
    );
}