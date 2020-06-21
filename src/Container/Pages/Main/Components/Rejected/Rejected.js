import React from 'react';

//import components
import { Message } from "semantic-ui-react";


export default function Rejected(props) {
    return (
        <div style={{ width: "50vw" }}>
            <Message warning>
                <Message.Header style={{ textAlign: 'center', fontSize: 25 }}>Mohon Maaf</Message.Header>
                <h4>
                    Terima kasih telah mendaftar pada kepanitiaan FILAFEST 2020.
                    Mohon maaf anda belum berkesempatan untuk menjadi bagian dari panitia FILAFEST 2020.
                    Tetap semangat dan jangan menyerah!
                </h4>
            </Message>
            <br />
        </div>
    )
}