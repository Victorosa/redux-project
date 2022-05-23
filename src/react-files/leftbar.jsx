import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {RiGroupFill} from 'react-icons/ri'
import {MdOutlineContactPage} from 'react-icons/md'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {MdVideoLabel} from 'react-icons/md'
import {MdSchedule} from 'react-icons/md'
import {FaAssistiveListeningSystems} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import {IoIosLogIn} from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Hleftbar() {
  const name = useSelector(state=>state.user.name)
  return (
    <div>
      <section className="leftbar">
          <p> <span className="icon"><AiFillHome/></span>  Homepage</p>
          <p> <span className="icon"><AiOutlineUnorderedList/></span>  Lists</p>
          <p> <span className="icon"><MdOutlineProductionQuantityLimits/></span>  Products</p>
          <p> <span className="icon"><RiGroupFill/></span>  Groups</p>
          <p> <span className="icon"><MdOutlineContactPage/></span>  Pages</p>
          <p> <span className="icon"><MdOutlinePhotoSizeSelectActual/></span>  Photos</p>
          <p> <span className="icon"><MdVideoLabel/></span>  Videos</p>
          <p> <span className="icon"><MdSchedule/></span>  Schedule</p>
          <p> <span className="icon"><FaAssistiveListeningSystems/></span>  Wishlist</p>
          <p> <span className="icon"><IoMdSettings/></span>  Setting</p>
          <p> <span className="icon"><IoIosLogIn/></span>  Logout ({name})</p>
      </section>
    </div>
  )
}

function Leftbar() {
  const [nav, setNav] = useState(false);
  const name = useSelector(state=>state.user.name)
  return (
    <div className='y'>
      <div className="z">
      <Hleftbar/>
      </div>
      
      <p className="ico" onClick={()=>setNav(!nav)}><span> {nav&&<p className='yty'><Hleftbar/></p>}</span><AiOutlineUnorderedList/></p>
    </div>
      
     
   
  )
}

export default Leftbar
