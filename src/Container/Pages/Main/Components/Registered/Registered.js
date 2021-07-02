import React from "react";
import { Message } from "semantic-ui-react";

export const Registered = (props) => {
    return (
        <div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '50vw' }}>
                <Message>
                    <br />
                    <h1 style={{ textAlign: 'center', color: '#1897D4' }}>Terimakasih telah mendaftar Open Recruitment Staff Muda BEM FILKOM 2020!</h1>
                    <br />
                    <h3 style={{ textAlign: 'center', color: '#192452' }}>All the best for you!!</h3>
                    <h3 style={{ textAlign: 'center', color: '#192452' }}>NB: Pemberitahuan tentang jadwal interview paling cepat akan diinformasikan H+1 setelah peserta melakukan submit data diri dan pengiriman formulir pendaftaran. Untuk konfirmasi kehadiran akan dihubungi langsung oleh panitia pada H-1 jadwal interview yang telah ditentukan.</h3>
                    <br />
                </Message>
            </div>
        </div>
    )
};

export default Registered;
