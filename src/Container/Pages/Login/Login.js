import React, { useContext } from 'react';

//import component
import { Header, Message } from "semantic-ui-react";
import { FormLogin } from './Components';
import { eventNameAcro } from '../../../Config/EventDetail';
import { Nodux, handle_login } from '../../../Config/Context';

export default function Login(props) {
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState(false);

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Header as="h2" textAlign="center" style={{ marginTop: 30 }}>
                    Login {eventNameAcro}
                </Header>
                <FormLogin
                    loading={loading}
                    setLoading={setLoading}
                    setMessage={setMessage} 
                />
                <br /><br /><br /><br />
                {loading === true && (
                    <div style={{ marginBottom: 50, marginTop: -10 }}>
                        <div class="ui icon message">
                            <i class="notched circle loading icon" />
                            <div class="content">
                                <div class="header">Just one second</div>
                                <p>We're fetching that content for you.</p>
                            </div>
                        </div>
                    </div>
                )}
                {message === true && (
                    <Message
                        style={{ marginBottom: 50, marginTop: -10 }}
                        error
                        header='Password atau Nim tidak sesuai!'
                        content='Silahkan Login Kembali!'
                    />
                )}
            </div>
        </React.Fragment>
    )
}