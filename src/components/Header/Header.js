import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/UserContext';
import { FaUserCircle, FaLanguage } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const [darkMode, setDarkMode] = useState(false)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('SuccessFully Log Out', { autoClose: 500 })
            })
            .catch(error => toast.error('Your are currently Sign In', { autoClose: 500 }))
    }

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add("dark");
        } else {
            window.document.body.classList.remove("dark");
        }
    }, [darkMode]);


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact
                    text-slate-400 hover:text-sky-400 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                        <Link to="/">Home</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </ul>
                </div>
                <div className='flex justify-center gap-7'>
                    <button className="btn btn-ghost normal-case text-5xl"><FaLanguage className='' style={{ height: '40px' }}></FaLanguage></button>
                    <button className="btn btn-ghost normal-case text-xl">DraGoMan</button>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-7 text-2xl ">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/blog">Blog</Link>
                    {
                        user?.email ?
                            <Link onClick={handleSignOut}>Log Out</Link>
                            :
                            <Link to="/login">Log In</Link>
                    }
                    <Link to="/signup">Sign Up</Link>

                    {/* using tooltip show userName onMouseOver to the icon or image */}

                    {user?.photoURL ?
                        <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                            <img style={{ height: '40px' }} className="mask mask-circle" alt=''
                                src={user?.photoURL}>

                            </img>
                        </div>
                        : <div className='tooltip tooltip-bottom' data-tip="User"><FaUserCircle style={{ height: '40px' }} className="mask mask-circle"></FaUserCircle></div>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <div className={darkMode ? "dark-mode" : "light-mode"}>
                    <label className="swap swap-rotate">

                        {/* <!-- this hidden checkbox controls the state --> */}
                        <input onClick={() => setDarkMode(!darkMode)} type="checkbox" />

                        {/* <!-- sun icon --> */}
                        <svg style={{ color: darkMode ? "grey" : "yellow" }} className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg style={{ color: darkMode ? "#c96dFd" : "grey" }} className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;