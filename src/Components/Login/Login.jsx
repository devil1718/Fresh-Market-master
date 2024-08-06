import React, { useState ,useContext} from 'react';
import Style from './Login.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'
import { UserContext } from './../../Context/UserContext';

export default function Login() {
    let {setUserToken,setuserData} = useContext(UserContext)
    let navigate = useNavigate();
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)
    async function submitLogin(values) {
        // this function is called when the form is submitted
        setLoading(true);
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values).catch((err) => {
            setLoading(false)
            setError(err.response.data.message)

        })
        console.log(data);
        if (data.message === "success") {
            setLoading(false)
            localStorage.setItem('userToken',data.token);
            setUserToken(data.token);
            setuserData(data.user);
            navigate('/')
        }
    }
    let passwordRegex = /[a-zA-z]{2,8}/
    let validationSchema = yup.object({ // validation schema for yup object
        email: yup.string().email("email in invalid").required("email is required"),
        password: yup.string().matches(passwordRegex, "password is invalid ").required("password is required"),
    })
    let formik = useFormik({ // this is an object for control the form input
        initialValues: { // this is an object for api schema to send data
            email: "",
            password: "",
        }, validationSchema,
        onSubmit: submitLogin //this is for call function  submitRegister
    })
    return (
        < >
            <div className="w-75 mx-auto py-5">
                <h3>Login Form</h3>

                {error !== null ? <div className="alert alert-danger">{error} Invalid UserName or Password</div> : ''}

                <form onSubmit={formik.handleSubmit}  >
                    <label htmlFor="email">User Email</label>
                    <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name='email' id='email' className='form-control mb-4' />

                    {formik.errors.email && formik.touched.email ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.email}
                        </div>
                        : ''}

                    <label htmlFor="password">User Password</label>
                    <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='password' id='password' className='form-control mb-4' />

                    {formik.errors.password && formik.touched.password ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.password}
                        </div>
                        : ''}

                    {loading ?
                        <button className='btn bg-main mt-3  d-flex' type='button'>
                            Check
                            <Bars
                                height="25"
                                width="50"
                                color="#fff"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </button>
                        :
                        <>
                            <div className='d-flex align-items-center'>
                                <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main ' type='submit'> Login </button>
                                <Link to={'/register'} className='text-dark text-decoration-none  mx-2 py-2  ' >
                                    Register Now ?
                                </Link>
                            </div>
                        </>

                    }



                </form>
            </div>
        </>
    )
}
