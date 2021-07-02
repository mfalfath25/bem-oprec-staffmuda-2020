import React, { useContext } from 'react';
import { Form, Button, Header, Message, Dropdown } from "semantic-ui-react";
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Nodux } from '../../../../../Config/Context';
import { useHistory } from "react-router-dom";

//objek list divisi
const divisi = [
    // { key: '0', text: '--Tidak Memilih--', value: 'gakmilih' },
    // { key: '1', text: '--Umum--', value: 'dis', disabled : true },
    // { key: '2', text: 'Sekretasis dan Bendahara', value: 'sekben' },
    // { key: '3', text: '--Event--', value: 'dis', disabled : true },
    // { key: '4', text: 'Divisi Acara', value: 'acara' },
    // { key: '5', text: 'Divisi DDM', value: 'ddm' },
    // { key: '6', text: 'Divisi IT', value: 'it' },
    // { key: '7', text: 'Divisi Humas', value: 'humas' },
    // { key: '8', text: 'Divisi Marketing', value: 'marketing' },
    // { key: '9', text: '--Competition--', value: 'dis', disabled : true },
    // { key: '10', text: 'Business IT Case', value: 'Business IT Case' },
    // { key: '11', text: 'Smart Device', value: 'Smart Device' },
    // { key: '12', text: 'Game', value: 'Game' },
    // { key: '13', text: 'Programming', value: 'Programming' },
    // { key: '14', text: 'CTF', value: 'CTF' },
    // { key: '15', text: 'App Inov.', value: 'App Inov.' },
    
    // { key: '0', text: '--Tidak Memilih--', value: 'gakmilih' },
    // { key: '1', text: '--Kementerian--', value: 'dis', disabled: true },
    // { key: '2', text: 'PSDM', value: 'psdm' },
    // { key: '3', text: 'K2P', value: 'k2p' },
    // { key: '4', text: 'Perhub', value: 'perhub' },
    // { key: '5', text: 'Sosling', value: 'sosling' },
    // { key: '6', text: 'Kastrat', value: 'kastrat' },
    // { key: '7', text: 'Advokesma', value: 'advokesma' },
    // { key: '8', text: '--Kebiroan--', value: 'dis', disabled: true },
    // { key: '9', text: 'Bismit', value: 'bismit' },
    // { key: '10', text: 'PIT', value: 'pit' },
    // { key: '11', text: 'Adkeu', value: 'adkeu' },
    // { key: '12', text: 'Medinkraf', value: 'medinkraf' },
]

//handle daftar
const daftar = async (nam, nim, prodi, datas, history) => {
    const body = {
        nama: nam,
        nim: nim,
        prodi: prodi,
        line: datas.line,
        email: datas.email,
        noHp: datas.noHp,
        linkDrive: datas.linkDrive,
    };
    // console.log("isiBody", body)
    // const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/KapelProkerBesar/";
    // https://cors-anywhere.herokuapp.com/
    const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/OprecStaffMuda/";
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(body)
    })
    const result = res;
    const data = await res.json();
    // console.log(data);
    if (!result.ok) {
        // setLoading(false);
        alert("Ups!! Terjadi Masalah Koneksi");
        return false;
    } else {

        history.push(`/main/terdaftar`);
    }
};

export default function FormOnline(props) {
    // State untuk form pemohon
    let history = useHistory();
    const [state, dispatch] = useContext(Nodux.AuthContext);
    // console.log('cekstate',state)
    const [pesan, setPesan] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [formdata, setFormData] = React.useState({
        line: '',
        email: '',
        noHp: '',
        linkDrive: '',
    })

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formdata,
            [e.target.id]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
                <Header textAlign="center" as='h1' content='Form Pendaftaran Staff Muda BEM FILKOM 2020' />
                <div style={{ width: '50vw' }}>
                    <Form onSubmit={() => {
                            daftar(state.nama, state.nim, state.prodi, formdata, history);
                        // console.log(formdata)
                    }}>
                        <Form.Input id='nim' fluid required label='NIM' placeholder='NIM' readOnly value={state.nim} />
                        <Form.Input id='nama' fluid required label='Nama' placeholder='Nama' readOnly value={state.nama} />
                        <Form.Input id='prodi' fluid required label='Prodi' placeholder='Prodi' readOnly value={state.prodi} />
                        <Form.Input id='line' fluid required label='ID Line' placeholder='ID Line' onChange={e => handleChange(e)} value={formdata.line}/>
                        <Form.Input id='email' fluid required label='Email' placeholder='Email' onChange={e => handleChange(e)} value={formdata.email}/>
                        <Form.Input id='noHp' fluid required label='No HP' placeholder='No HP' onChange={e => handleChange(e)} value={formdata.noHp}/>
                        <Form.Input id='linkDrive' fluid required label='Link Drive Pengumpulan Berkas' placeholder='Link Drive Pengumpulan Berkas' onChange={e => handleChange(e)} value={formdata.linkDrive}/>
                        <br />
                        {loading ? (
                            <Button color="blue" loading fluid>
                                Login
                            </Button>
                        ) : (
                                <Button
                                    color="blue"
                                    fluid
                                >
                                    Submit
                                </Button>
                            )}
                    </Form>
                    <br />
                    {pesan === true && (
                        <Message
                            style={{ marginBottom: 50, marginTop: -10 }}
                            error
                            header='Pilihan Kosong'
                            content='Silahkan isi pilihan pertama dan kedua anda'
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}