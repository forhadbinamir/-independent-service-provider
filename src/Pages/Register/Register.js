import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [check, setCheck] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    // input value cast here 
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const conformPasswordRef = useRef('')
    const addressRef = useRef('')


    // handle form submition here 
    const handleSubmitForm = event => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const conformPassword = conformPasswordRef.current.value;
        createUserWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/login')
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorText;
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div>
            <div className="form-container">
                <div className="title-form">
                    <h2 className='text-center my-6 text-4xl font-bold border-bottom w-[50%] pb-2 mx-auto'>Register <span className='text-red-600'>Form</span></h2>
                </div>
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" ref={nameRef} name='name' placeholder='Your Name' required />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="text" ref={emailRef} name='email' placeholder='Email' required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="text" ref={passwordRef} name='password' placeholder='Password' required />
                    <br />
                    <label htmlFor="conformpassword">Conform Password</label>
                    <input type="text" ref={conformPasswordRef} name='conformpassword' placeholder='Conform Password' required />
                    <br />
                    <label htmlFor="name">Address</label>
                    <input type="text" ref={addressRef} name='address' placeholder='Address' />
                    <br />
                    <input onClick={() => setCheck(!check)} type="checkbox" name="checkbox" id="checkbox" />


                    <label className={`${check ? 'text-primary' : 'text-danger'}`} htmlFor="checkbox">Accept term and condition</label>


                    {errorText}
                    <input disabled={!check} className='bg-red-600 text-white font-bold hover:bg-red-800' type="submit" value="Register" />
                </form>
                <div>
                    <p className='text-center mt-3'>Already have an account <Link to='/login' className='text-red-600 font-bold hover:text-red-800 cursor-pointer no-underline'>Please Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;