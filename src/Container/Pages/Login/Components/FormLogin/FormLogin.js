import React, { useContext } from 'react';

//import components
import { Button, Form } from "semantic-ui-react";
import { Nodux, handle_login } from '../../../../../Config/Context';
import { useHistory } from 'react-router-dom';

//check authentication
const Check_Login = async (nim, pass, dispatch) => {
    const body = {
        nim: nim,
        password: pass
    };
    try {
        // https://cors-anywhere.herokuapp.com/
        const res = await fetch("https://bemfilkom.ub.ac.id/secure/api/auth/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const result = res;
        const data = await res.json();
        if (!result.ok) {
            return false;
        } else {
            // console.log('cek data', data.data)
            dispatch(handle_login(data.data.nama, data.data.nim, data.data.prodi));
            return { "status": true };
        }

    } catch (error) {
        console.log("Konsol error : ", error);
        return { "status": false };
    }
};

export default function FormLogin(props) {
    // console.log("cek prosp", props)
    const { loading, setLoading, setMessage } = props;
    const [state, dispatch] = useContext(Nodux.AuthContext);

    const [nim, setNim] = React.useState("");
    const [password, setPassword] = React.useState("");

    let history = useHistory();

    const HandleLogin = async (nim, password) => {

        setLoading(true);

        //take the value of nim from context
        let nm = nim;
        let cek1 = nm.substring(0, 2) === "19";
        let cek2 = nm.substring(0, 2) === "18";
        let cek3 = nm.substring(3, 6) === "150";
        let cek4 = nm === "175150400111045";

        //check if nim is meet the requirements
        if (nim.length === 15 && (cek1 || cek2 || cek4)) {
            //run API to get value from function login
            await Check_Login(nim, password, dispatch).then(async (ress) => {
                let a = ress;
                // console.log("ress hal login",ress);
                if (!a.status || a.status == false) {
                    setLoading(false);
                    alert("Mohon Maaf Terdapat Masalah Koneksi");
                } else {
                    try {
                        let URL = `https://bemfilkom.ub.ac.id/secure/api/2020/OprecStaffHology/?check=${nim}`;
                        const res = await fetch(URL, {
                            method: "GET",
                        });
                        const result = res;
                        const data = await res.json();
                        console.log("data check", data);
                        if (data) {
                            setLoading(false);
                            data.status === 1 ? history.replace(`/main/terdaftar`) : history.replace("/main/notfound");
                        } else {
                            alert("Mohon Maaf Terdapat Masalah Koneksi");
                            setLoading(false);
                        }
                    } catch (error) {
                        console.log("Konsol error : ", error);
                        alert("Mohon Maaf Terdapat Masalah Koneksi");
                    }
                }
            });
        } else {
            setLoading(false);
            setMessage(true);
        }
    }

    return (
        <div style={{ width: '50vw' }}>
            <Form size="large">
                <Form.Input fluid type="number" icon="user" value={nim} iconPosition="left" placeholder="NIM" onChange={(e) => { e.preventDefault(); setNim(e.target.value) }} />
                <Form.Input fluid icon="lock" iconPosition="left" value={password} placeholder="Password" type="password" onChange={(e) => { e.preventDefault(); setPassword(e.target.value) }} />
                {loading ? (
                    <Button fluid size="large" loading primary>
                        Loading
                    </Button>
                ) : (
                        <Button
                            color="blue"
                            fluid
                            size="large"
                            onClick={(e) => {
                                e.preventDefault();
                                HandleLogin(nim, password)
                            }}
                        >
                            Login
                        </Button>
                    )}
            </Form>
        </div>
    )
}