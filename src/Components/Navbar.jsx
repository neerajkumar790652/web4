import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='left'>
                <div><h1 style={{marginLeft:"20px"}}>Hootsuite</h1></div>
                <div>
                    <a href='#'>Platform</a>
                    <a href='#'>Plans</a>
                    <a href='#'>Enterprises</a>
                    <a href='#'>Resources</a>
                    <a href='#'>Education</a>
                    
                </div>
            </div>
            <div className='right'>
                <a href="#">Contact us</a>
                <button className='b1'>Login</button>
                <button className='b2'>Sign up</button>
            </div>
            
        </div>
    );
}

export default Navbar;