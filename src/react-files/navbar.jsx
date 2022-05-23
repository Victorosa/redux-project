import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
import { useSelector } from 'react-redux'


function Navbar() {
    const name = useSelector(state=>state.user.name)
  return (
    <div>
<section className='navbar'>
    <div className="snav">
        <div className="head">
            <p>
                Victor App
            </p>
        </div>
        <div className='hac'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    </div>
    <div className="search">
        <form>
            <input type="text" placeholder='search for something....'/>
        </form>
    </div>
    <div className="nam">
             <img src="" alt="" />
       <p><span className="human"></span>{name}</p> 
    </div>
</section>
    </div>
  )
}

export default Navbar
