import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [show, setShow]= useState(false);
    console.log(show);

    const paddingFunc=()=>{
        if(window.pageYOffset > 450){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{

        window.addEventListener('scroll', paddingFunc)

    },[show])

    return (
        <nav className= {`flex sticky top-0 left-0 right-0 z-10 justify-between item-center ${show ?'py-1' :'py-6'} transition-all duration-150 px-12 bg-blue-900 text-white`} >
            <h2>yoyo</h2>

            <ul className='flex items-center gap-x-12'>
                <li>home</li>
                <li>shop</li>
                <li>log-out</li>
            </ul>
        </nav>
    );
};

export default Navbar;