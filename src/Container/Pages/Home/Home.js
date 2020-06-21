import React, { useContext } from 'react';
import styles from './style.module.scss';

//import component
import { Button, Container, Divider } from "semantic-ui-react";
import { Definisi, HeaderHome, Timeline } from './Components';
import { Nodux } from '../../../Config/Context';

export default function Home(props) {
    const [state, dispatch] = useContext(Nodux.AuthContext);
    console.log("cek context", state);
    return (
        <React.Fragment>
            <HeaderHome properti="tes" properti2="te" properti3='fafwaf' />
            <Divider hidden />
            <Container>
                <Definisi />
                <br />
                <Divider section />
                <Timeline />
                <br></br>
                <div className="ui middle aligned center aligned container">
                    <Button
                        size="big"
                        positive
                        centered
                        onClick={async () => {
                            props.history.replace("/login");
                        }}>
                        <Button.Content visible>Daftar</Button.Content>
                    </Button>
                </div>
                <Divider hidden />
            </Container>
        </React.Fragment>
    );
}