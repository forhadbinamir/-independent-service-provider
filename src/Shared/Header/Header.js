import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Hooks/Firebase.init';
import logo from '../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { XIcon, MenuIcon } from '@heroicons/react/solid'
const Header = () => {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className="container bg-white border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800">
                <div className="flex justify-between items-center ">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </Link>
                    <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                        {open ? <MenuIcon className="w-6 h-6"></MenuIcon> : <XIcon className="w-6 h-6"></XIcon>}

                    </button>
                    <div className={`w-full mx-auto md:block absolute md:static duration-700 z-20 bg-white ${open ? 'left-0 top-[-200px]' : 'top-[40px]'}`}>
                        <ul className="flex justify-end flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium w-full items-center">

                            <li>
                                <Link to="/home" className="block text-lg pr-4 pl-3  no-underline text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutme" className="block text-lg pr-4 pl-3  no-underline text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</Link>
                            </li>
                            <li>
                                <Link to="/services" className="block text-lg pr-4 pl-3  no-underline text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="block text-lg pr-4 pl-3  no-underline text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
                            </li>
                            <li>
                                {
                                    user
                                        ?
                                        <Link onClick={handleSignOut} to="" className="block bg-red-600 mt-[-6px] py-2 px-4 rounded-pill text-lg pr-4 pl-3 no-underline text-white hover:bg-gray-700 border-1 text-black hover:text-black">Sing Out</Link>

                                        :
                                        <Link to="/login" className="block bg-red-600 mt-[-6px] py-2 px-4 rounded-pill text-lg pr-4 pl-3 no-underline text-white hover:bg-gray-700 border-1 text-black hover:text-black">Sing in</Link>

                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    );
};

export default Header;