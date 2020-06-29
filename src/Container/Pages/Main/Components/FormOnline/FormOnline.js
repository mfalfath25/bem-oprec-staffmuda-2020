import React, { useContext } from 'react';
import { Form, Button, Header, Message, Dropdown } from "semantic-ui-react";
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Nodux } from '../../../../../Config/Context';
import { useHistory } from "react-router-dom";

//objek list divisi
const divisi = [
    { key: '0', text: '--Tidak Memilih--', value: 'gakmilih' },
    { key: '1', text: '--Umum--', value: 'dis', disabled : true },
    { key: '2', text: 'Sekretasis dan Bendahara', value: 'sekben' },
    { key: '3', text: '--Event--', value: 'dis', disabled : true },
    { key: '4', text: 'Divisi Acara', value: 'acara' },
    { key: '5', text: 'Divisi DDM', value: 'ddm' },
    { key: '6', text: 'Divisi IT', value: 'it' },
    { key: '7', text: 'Divisi Humas', value: 'humas' },
    { key: '8', text: 'Divisi Marketing', value: 'marketing' },
    { key: '9', text: '--Competition--', value: 'dis', disabled : true },
    { key: '10', text: 'Business IT Case', value: 'Business IT Case' },
    { key: '11', text: 'Smart Device', value: 'Smart Device' },
    { key: '12', text: 'Game', value: 'Game' },
    { key: '13', text: 'Programming', value: 'Programming' },
    { key: '14', text: 'CTF', value: 'CTF' },
    { key: '15', text: 'App Inov.', value: 'App Inov.' },
]

//handle daftar
const daftar = async (nam, nim, prodi, datas, history) => {
    const body = {
        nama: nam,
        nim: nim,
        prodi: prodi,
        kontak: datas.kontak,
        pilihan1: datas.pilihan1,
        pilihan2: datas.pilihan2,
        motivasi: datas.motivasi,
    };
    // console.log("isiBody", body)
    // const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/KapelProkerBesar/";
    // https://cors-anywhere.herokuapp.com/
    const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/OprecStaffHology/";
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
        nim: '',
        nama: '',
        prodi: '',
        kontak: '',
        pilihan1: '',
        pilihan2: '',
        motivasi: ''
    })

    const handleChange = (e, val, idx) => {
        e.preventDefault();
        setFormData({
            ...formdata,
            [idx]: val
        })
    }

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
                <Header textAlign="center" as='h1' content='Form Pendaftaran Online Hology 3.0' />
                <div style={{ width: '50vw' }}>
                    <Form onSubmit={() => {
                        if ((formdata.pilihan1 === (null || '')) && (formdata.pilihan2 === (null || ''))) {
                            setPesan(true)
                        } else {
                            setLoading(true);
                            setPesan(false);
                            daftar(state.nama, state.nim, state.prodi, formdata, history);
                        }
                        // console.log(formdata)
                    }}>
                        <Form.Input id='nim' fluid required label='NIM' placeholder='NIM' readOnly value={state.nim} />
                        <Form.Input id='nama' fluid required label='Nama' placeholder='Nama' readOnly value={state.nama} />
                        <Form.Input id='prodi' fluid required label='Prodi' placeholder='Prodi' readOnly value={state.prodi} />
                        <Form.Input id='kontak' fluid required label='ID Line' placeholder='ID Line' onChange={e => { handleChange(e, e.target.value, e.target.id) }} />
                        <Form.Field>
                            <label>Pilihan 1</label>
                            <Dropdown
                                id='pilihan1'
                                placeholder='Pilihan pertama'
                                search
                                selection
                                options={divisi.filter(isi => isi.value != 'gakmilih')}
                                onChange={e => { handleChange(e, e.target.textContent, 'pilihan1') }}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Pilihan 2</label>
                            <Dropdown
                                id='pilihan2'
                                placeholder='Pilihan kedua'
                                search
                                selection
                                options={divisi.filter(isi => isi.text != formdata.pilihan1)}
                                onChange={e => { handleChange(e, e.target.textContent, 'pilihan2') }}
                            />
                        </Form.Field>
                        <Form.TextArea id='motivasi' fluid label='Motivasi' Placeholder='Motivasi mendaftar' onChange={e => { handleChange(e, e.target.value, e.target.id) }} />
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