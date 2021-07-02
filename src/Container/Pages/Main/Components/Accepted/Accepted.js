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
                    {/* <p style={{ color: 'black' }}>
                        Anda dinyatakan <span style={{ color: 'green' }}>LOLOS</span> pada seleksi penerimaan Staff Muda BEM FILKOM 2020.
                        Selamat bergabung di kepanitiaan Staff Muda BEM FILKOM 2020. Terima kasih telah memilih kelembagaan ini untuk berkontribusi dalam turut andil menjadi Staff Muda BEM Fakultas Ilmu Komputer 2020.
                        Informasi mengenai first gathering akan di informasikan lebih lanjut.
                        <br />
                        Selanjutnya diharap hadir pada agenda pertama Staff Muda BEM FILKOM 2020 pada:
                        Hari    : Selasa, 3 November 2020
                        Jam     : 19.30 WIB
                        Tempat  : (link menyusul)
                        Untuk informasi lebih detail akan diinformasikan melalui email masing-masing.
                        SAMPAI BERTEMU DI FIRST GATHERING!
                    </p> */}
                    <p style={{ color: 'black' }}>
                        Kamu dinyatakan <span style={{ color: 'green' }}>LOLOS</span> pada seleksi penerimaan Staff Muda BEM FILKOM 2020.
                        Selanjutnya, diharap hadir pada agenda pertama Staff Muda BEM FILKOM 2020 pada:
                        <br />
                        <br />
                        Hari, tanggal : Selasa, 3 November 2020
                        <br />
                        Jam           : 19.30 WIB
                        <br />
                        Tempat        :  (Link Menyusul)
                        <br />
                        <br />
                        Untuk informasi lebih detail akan diinformasikan melalu email masing-masing. Sampai bertemu di agenda pertama Staff Muda!!
                    </p>
                </Message>
                <br/><br/>
            </div>
        </>
    )
}