import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate();
    let LogoutUser =()=>{
        navigate('/');

    }
    let user ={name: 'Ibad Khan'}
  return (
    <div className='shadow bg-white'>
        <nav className='flex items-center justify-between px-4 py-3.5 max-w-7xl mx-auto text-slate-800 transition-all  '>
            <Link to='/' >
            <img src='/logo.svg' alt="" className='h-11 w-auto' />
            </Link >
            <div className='flex items-center gap-4 text-sm'>
                <p className='max-sm:hidden'>Hi,{user?.name}</p>
                <button className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-75 transition-all' onClick={LogoutUser} >Logout</button>

            </div>
        </nav>
    </div>
    
)
}

export default Navbar