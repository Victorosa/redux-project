import React from 'react'
import { useSelector } from 'react-redux'

function Rightbar() {
  const name = useSelector(state=>state.user.name)
  return (
    <div>
      <section className="rightbar">
          <p>Recommended for {name}</p>
          <div className="right"> <p className='p'>Recommended for {name}</p></div>
          <p>Popular on Victor App</p>
          <div className="right"> <p className='p'>Popular on Victor App</p></div>
          <p>Editor's Choice</p>
          <div className="right"><p className='p'>Editor's Choice</p></div>
      </section>
    </div>
  )
}

export default Rightbar
