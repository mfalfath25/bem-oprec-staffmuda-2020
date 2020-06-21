import React from "react";
import { Image, Message } from "semantic-ui-react";

export default function Accepted() {
    return (
        <>
            <Image size='small' centered src="./img/LogoVertical.png" />
            <div style={{ width: "65%", margin: 'auto' }}>
                <Message info size='big'>
                    <Message.Header style={{ textAlign: 'center', color: '#192452', fontSize: 25 }}>Selamat!!!</Message.Header>
                    <br/>
                    <p style={{ color: 'black' }}>
                        Anda dinyatakan <span style={{ color: 'green' }}>LOLOS</span> pada seleksi penerimaan Staff Filafest 2020.
                        Selamat bergabung di kepanitiaan FILAFEST 2020. Terima kasih telah memilih kepanitiaaan ini untuk berkontribusi menyukseskan acara dies natalis Fakultas Ilmu Komputer 2020.
                        Informasi mengenai first gathering akan di informasikan lebih lanjut.
                        Informasi mengenai first gathering akan di informasikan lebih lanjut.
                        <br />
                        SAMPAI BERTEMU DI FIRST GATHERING!
                    </p>
                </Message>
                <br/><br/>
            </div>
        </>
    )
}