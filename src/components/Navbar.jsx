import React from 'react'
import { Link } from 'react-router-dom';
import img from '../images/amazon_.png'
import './Navbar.css';
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon  from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';

import { auth } from "../config/Firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

function Navbar() {
    const [{basket}] = useStateValue();
    const [user] = useAuthState(auth);
    async function userLogOut() {
        await signOut(auth);
    }
    return (
        <div className='header'>
            <Link to="/"><img className='header_logo' src={img} alt='amazon-logo'></img></Link>
            <div className='header_search'>
                <input className='header_searchInput' placeholder='Search...'></input>
                <div className='header_searchIcon'> <SearchIcon fontSize='20px' /></div>
            </div>
            <div className='header_nav'>
                <div  className='header_link'>
                    <div className='header_option'>
                       {user ? (<> <span className='header_optionOne'>Hello {user?.displayName}</span> <span className='header_optionTwo header_logout' onClick={userLogOut}>Sign Out</span></>):
                        <Link to='/login' className='header_link'> <div className='header_option'><span className='header_optionOne'>Hello {user?.displayName}</span><span className='header_optionTwo'>Sign In</span></div></Link> }
                    </div>
                </div>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionOne'>Returns</span>
                        <span className='header_optionTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionOne'>Your</span>
                        <span className='header_optionTwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header_link'>
                    <div className='header_optionBasket'>
                        <span className='basket'><ShoppingBasketIcon fontSize='1.5rem'/></span>
                        <span className='header_optionTwo header_basketcount'>{basket?.length}</span>

                    </div>
                </Link>

            </div>
            

        </div>
    )
}

export default Navbar  