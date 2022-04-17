import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Hooks/Firebase.init';

const Login = () => {
    const [check, setCheck] = useState(false)
    // get value from input by using useRef;
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // handle login form 
    const handleLoginForm = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/home')
    }
    let errorText;
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div>
            <div className="w-[50%] mx-auto border p-20 shadow rounded-lg mt-8">
                <div>
                    <h2 className='text-center text-4xl font-bold border-bottom w-[50%] pb-2 mb-6 mx-auto'>Please <span className='text-red-600'>Login</span></h2>
                </div>
                <Form onSubmit={handleLoginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className={`${check ? 'text-blue-600' : 'text-black'}`} controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setCheck(!check)} type="checkbox" label="Accept our privacy policy" />
                    </Form.Group>

                    {errorText}

                    <Button disabled={!check} variant="danger mt-3 px-4" type="submit">
                        Submit
                    </Button>
                    <p className='text-center'>New to here <Link className='text-red-600 font-bold no-underline' to='/register'>Plase Register</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;