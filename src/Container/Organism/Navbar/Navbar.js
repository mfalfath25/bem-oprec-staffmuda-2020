import React, { useContext } from 'react';

//import components
import { Menu, Image, Icon, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { Nodux, handle_logout } from '../../../Config/Context';

export default function Navbar(props) {
    const [state, dispatch] = useContext(Nodux.AuthContext);

    return (
        <React.Fragment>
            <Menu size="massive" style={{ margin: 0, padding: 0, backgroundColor: "white" }} secondary color='violet'>
                <Menu.Item style={{ width: 45, padding: 0,marginLeft: 15 }} as={Link} to='/' name="Home"  >
                    <Image size="massive" src="./img/homefix.png" />
                </Menu.Item>
                <Menu.Item style={{ padding: 0, position: "absolute", left: "50%" }}>
                    <Image style={{ width: 35 }} src="./img/LogoCrop.png" />
                </Menu.Item>
                {state.isLogged && (
                    <Menu.Menu position="right">
                        <Menu.Item onClick={() => {
                            dispatch(handle_logout());
                        }}>
                            <Button
                                onClick={() => {
                                    dispatch(handle_logout());
                                }}
                            >
                            </Button>
                            <Icon name='sign out' />
                        </Menu.Item>
                    </Menu.Menu>
                )}
            </Menu>
        </React.Fragment>
    )
}