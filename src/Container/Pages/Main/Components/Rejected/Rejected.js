import React from 'react';

//import components
import { Image, Message } from "semantic-ui-react";


export default function Rejected(props) {
    return (
        <div style={{ width: "65%", margin: 'auto' }}>
            <Image size='small' centered src="./img/LogoVertical.png" />
            <Message warning info size='big'>
                <Message.Header style={{ textAlign: 'center', fontSize: 25 }}>Mohon Maaf</Message.Header>
                {/* <h4>
                    Terima kasih telah mendaftar pada Staff Muda BEM FILKOM 2020.
                    Mohon maaf anda belum berkesempatan untuk menjadi bagian dari Staff Muda BEM FILKOM 2020.
                    Tetap semangat dan jangan menyerah!
                </h4> */}
                <br/>
                <p style={{ color: 'black' }}>
                    Dengan berat hati kami informasikan bahwa kamu BELUM BERHASIL lolos pada seleksi penerimaan Staff Muda BEM FILKOM 2020.
                    Tetap semangat!! Masih banyak tempat untuk berkontribusi di FILKOM.
                    Kami tunggu partisipasimu kedepannya di lain kesempatan!!
                </p>
            </Message>
            <br />
        </div>
    )
}