import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { removeUser } from '../utils/userSlice';

function Header() {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    const handleGPTSearchClick = () => {
        dispatch(toggleGPTSearchView())
    }
    return (

        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen'>
            <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && <div className='flex p-2'>
                <button className='py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg' onClick={handleGPTSearchClick}>{showGPTSearch ? "Home Page" : "GPT Search"}</button>
                <img className='w-12 h-12 m-2' src={user.photoURL} />
                <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
            </div>}

        </div>


    )
}

export default Header