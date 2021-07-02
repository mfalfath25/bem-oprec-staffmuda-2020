import React from 'react';

//import components
import { Header, Step } from "semantic-ui-react";

//objek prosedur
const listProsedur = [
    {
        title: "Download Berkas Offline",
        description: "Download berkas offline yang telah disediakan"
    },
    {
        title: "Isi Berkas",
        description: "Baca dan isi berkas offline yang diperlukan"
    },
    {
        title: "Upload ke Google Drive",
        description: "Buat folder pada Google Drive dan Upload berkas yang diperlukan"
    },
    {
        title: "Aktifkan Shareable Link",
        description: "Aktifkan shareable link pada folder Google Drive yang menyimpan berkas"
    },
    {
        title: "Login",
        description: "Login menggunakan akun SIAM"
    },
    {
        title: "Isi Form Online dan inputkan Shareable Link",
        description: "Isi form online dan masukan shareable link google drive yang telah dibuat"
    },
    {
        title: "Lengkapi berkas",
        description: "Lengkapi berkas yang diperlukan sebelum deadline dan tunggu konfirmasi lebih lanjut untuk mendapat jadwal interview online"
    }
]

export default function Prosedur(props) {
    return (
        <>
            <Header as='h2' style={{ marginBottom: 2.5, color: "#1B1E83" }}>
                {props.judul}
            </Header>
            
            <p style={{ color: "#333", fontSize: 18, fontWeight: 600 }}>
                Prosedur Pendaftaran Online Calon Staff Muda BEM FILKOM 2020
            </p>
            <React.Fragment>
                <Step.Group ordered size="tiny" vertical>
                    {
                        listProsedur.map((list, index) => {
                            return (
                                <Step>
                                    <Step.Content>
                                        <Step.Title style={{ fontSize: 14 }}>{list.title}</Step.Title>
                                        <Step.Description>{list.description}</Step.Description>
                                    </Step.Content>
                                </Step>
                            )
                        })
                    }
                </Step.Group>
            </React.Fragment>
        </>
    );
}