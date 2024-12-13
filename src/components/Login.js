import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { auth } from '../utils/firebase';
import { checkFullNameValid, checkValidCredentials } from '../utils/validate';
import Header from './Header'

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorInCredMessage, setErrorInCredMessage] = useState(null);
    const [errorInNameMessage, setErrorInNameMessage] = useState(null);
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorInCredMessage(null)
        setErrorInNameMessage(null)
    }

    const handleButtonClick = () => {
        setErrorInCredMessage(checkValidCredentials(email.current.value, password.current.value));
        !isSignInForm && setErrorInNameMessage(checkFullNameValid(fullName.current.value))

        if (errorInCredMessage || errorInNameMessage) return;

        if (!isSignInForm) {
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    console.log("successfully signed up");
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
        else {
            // Sign In 
        }

    }

    return (
        <div>
            <div className='absolute'>
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/CA-en-20241202-TRIFECTA-perspective_5bca1e73-96aa-4036-82aa-12d7b0d9f318_small.jpg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-4/12 p-12 my-36 mx-auto absolute right-0 left-0 text-white rounded-lg bg-black bg-opacity-80'>
                <h1 className='font-bold text-3xl py-2 m-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" ref={fullName} placeholder='Full Name' className='p-4 m-4 w-full bg-gray-700' />}
                <input type="text" ref={email} placeholder='Email Address' className='p-4 m-4 w-full bg-gray-700' />
                <input type="password" ref={password} placeholder='Password' className='p-4 m-4 w-full bg-gray-700' />
                <p className='text-red-700 font-bold py-2 m-4'>{errorInCredMessage} {!isSignInForm && errorInNameMessage}</p>
                <button className='p-4 m-4 w-full bg-red-700' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}</p>
            </form>
        </div >
    )
}

export default Login