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
                <Menu.Menu position="left">
                    {/* <Button>
                        <Menu.Item style={{ margin: 0, width: 45, padding: 0 }} as={Link} to='/' name="Home"  >
                            <Image size="massive" src="./img/homefix-new.png" />
                        </Menu.Item>
                    </Button> */}
                    <Menu.Item style={{ padding: 0 }} as={Link} to='/' name="Home"  >
                        <Button style={{ height: 40, width: 55, padding: 0 }}>
                            <Button.Content visible>
                            <Icon color="black" name='home' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
                
                <Menu.Item style={{ padding: 0, position: "absolute", justify: "center", left: "48%" }}>
                    <Image style={{ width: 40 }} src="./img/LogoCrop.png" />
                </Menu.Item>

                {state.isLogged && (
                    <Menu.Menu position="right">
                        <Menu.Item style={{ padding: 0 }} onClick={() => {
                            dispatch(handle_logout());
                        }}>
                            <Button style={{ height: 40, width: 55, padding: 0 }}
                                onClick={() => {
                                    dispatch(handle_logout());
                                }}
                            >
                                <Button.Content visible>
                                <Icon color="black" name='sign out' />
                                </Button.Content>
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                )}
            </Menu>
        </React.Fragment>
    )
}