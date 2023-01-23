import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { React, useState } from 'react'
import { toast } from 'react-toastify';


export default function LoginEms() {
    const [data, setdata] = useState({
        email: "",
        password: ""
    });

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const myLogin = (e) => {
        e.preventDefault()

        axios.post("http://localhost:4000/accounts/authenticate", data)
            .then(y => {
                console.log(y);
                localStorage.setItem("EMSdata", JSON.stringify(y.data))
                toast("Login Successfully.....")
            }).catch(() => {
                toast("Login is Faild")
            })
    }

    const Fetcdata = (y) => {

        Fetcdata.get("http://localhost:4000/accounts",
            {    // headers: {
                //     "Authorization": "Bearer " + r?.jwtToken
                // }
            })
            .then(r => {
                y(r.data);//Data Print in Table/Grid
            }).catch(
                y => {
                    console.log(y);
                }
            )
    }
    return (
        <div >
            <form onSubmit={myLogin} className='w-50 mx-auto m-5 border p-4 rounded bg-white'>
                <h3 className='text-center'>Login Form</h3>

                <TextField
                    type='email'
                    label='Email'
                    variant='filled'
                    fullWidth
                    onChange={myHandler}
                    name='email'>
                </TextField><br /><br />
                <TextField
                    type='password'
                    label='Password'
                    variant='filled'
                    fullWidth
                    onChange={myHandler}
                    name='password'>
                </TextField><br /><br />
                <input type="submit" value="Login" className='form-control btn btn-outline-primary' /><br /><br />
                {/* <button onClick={Fetcdata} className='form-control btn btn-outline-danger'>Fetch Data</button> */}
            </form>

        </div>
    )
}