import React from 'react'
import Header from './Header'

function Login() {
    return (
        <div>
            <div className='absolute'>
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/CA-en-20241202-TRIFECTA-perspective_5bca1e73-96aa-4036-82aa-12d7b0d9f318_small.jpg" />
            </div>
            <form className='w-4/12 p-12 my-36 mx-auto absolute right-0 left-0 text-white rounded-lg bg-black bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input type="text" placeholder='Email Address' className='p-4 m-4 w-full bg-gray-700' />
                <input type="password" placeholder='Password' className='p-4 m-4 w-full bg-gray-700' />
                <button className='p-4 m-4 w-full bg-red-700'>Sign In</button>
                <p className='p-4 cursor-pointer'>New to Netflix? Sign up now.</p>
            </form>
        </div>
    )
}

export default Login