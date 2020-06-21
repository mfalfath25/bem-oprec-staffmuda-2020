import React from 'react';

//import components
import { Header, Button, Segment, Checkbox, Popup } from "semantic-ui-react";

export default function Agreement(props) {

    const { submit, checked, setChecked } = props;

    return (
        <>
            <Header as='h2' style={{ marginBottom: 2.5, color: "#1B1E83" }}>
                Let's Start Our Journey!
            </Header>
            <Segment basic textAlign="center" style={{ marginTop: 0 }}>
                <Checkbox
                    style={{ fontSize: 12.5 }}
                    required
                    checked={checked}
                    label={<label>Saya telah membaca, menyetujui, dan siap mengikuti alur pendaftaran serta amanah dalam tiap proses didalamnya</label>}
                    onChange={()=>{setChecked()}}
                />
                <br />
                <br />
                {props.checked ? (
                    <Button
                        size="medium"
                        onClick={submit()}
                        style={{ marginBottom: 20, width: 150, backgroundColor: "#1897D4", color: "#ffffff" }}
                    >
                        LOGIN
                    </Button>
                ) : (
                        <Popup
                            position='bottom center'
                            content='Silahkan setujui persyaratan terlebih dahulu'
                            on='click'
                            pinned
                            trigger={
                                <Button
                                    size="medium"
                                    style={{ marginBottom: 20, width: 150, backgroundColor: "#1897D4", color: "#ffffff" }}
                                >
                                    LOGIN
                                    </Button>
                            }
                        />
                    )}
            </Segment>
        </>
    )
}