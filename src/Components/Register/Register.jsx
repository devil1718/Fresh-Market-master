import React, { useState } from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'



export default function Register() {
    let navigate = useNavigate();
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)
    async function submitRegister(values) {
        // this function is called when the form is submitted
        setLoading(true);
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values).catch((err) => {
            setLoading(false)
            setError(err.response.data.message)

        })
        console.log(data);
        if (data.message === "success") {
            setLoading(false)
            navigate('/login')
        }
    }
 
    let phoneRegex = /^01[0-9]{9}$/gm;
    let passwordRegex = /[a-zA-z]{2,8}/

    let validationSchema = yup.object({ // validation schema for yup object
        name: yup.string().min(3, "min length for user name is 3").max(50, "max length for user name is 10").required("user Name is required"),
        email: yup.string().email("email in invalid").required("email is required"),
        phone: yup.string().matches(phoneRegex, "in valid phone number").required("phone is required"),
        password: yup.string().matches(passwordRegex, "password is invalid ").required("password is required"),
        rePassword: yup.string().oneOf([yup.ref("password")], "rePassword must match password").required("rePassword is required")
    })
    let formik = useFormik({ // this is an object for control the form input
        initialValues: { // this is an object for api schema to send data
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        }, validationSchema,
        onSubmit: submitRegister //this is for call function  submitRegister
    })
    return (
        < >
            <div className="w-75 mx-auto py-5">
                <h3>Register Form</h3>

                {error !== null ? <div className="alert alert-danger">{error} This is a New Error</div> : ''}

                <form onSubmit={formik.handleSubmit}  >

                    <label htmlFor="name">User Name</label>
                    <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='name' id='name' className='form-control mb-4' />

                    {formik.errors.name && formik.touched.name ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.name}
                        </div>
                        : ''}


                    <label htmlFor="email">User Email</label>
                    <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name='email' id='email' className='form-control mb-4' />


                    {formik.errors.email && formik.touched.email ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.email}
                        </div>
                        : ''}


                    <label htmlFor="phone">User Phone</label>
                    <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name='phone' id='phone' className='form-control mb-4' />

                    {formik.errors.phone && formik.touched.phone ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.phone}
                        </div>
                        : ''}

                    <label htmlFor="password">User Password</label>
                    <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='password' id='password' className='form-control mb-4' />

                    {formik.errors.password && formik.touched.password ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.password}
                        </div>
                        : ''}



                    <label htmlFor="rePassword">Re Password</label>
                    <input value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='rePassword' id='rePassword' className='form-control mb-4' />

                    {formik.errors.rePassword && formik.touched.rePassword ?
                        <div className="alert alert-primary" role="alert">
                            {formik.errors.rePassword}
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
                        : <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main mt-3' type='submit'> Register
                           
                        </button>
                    }



                </form>
            </div>
        </>
    )
}

