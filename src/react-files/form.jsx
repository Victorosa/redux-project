import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update, remove } from '../redux/userslice';


export default function Form() {
    const [deleting, setDeleting] = useState(false); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState(true);
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState(true);
    const handleDelete = ()=>{
      if(login){
        setDeleting(true)
      }
      else{
        setAccount(false)
        setTimeout(()=>{
          setAccount(true)
        }, 3000)
      }
    }
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const handleUpdate = (e) => {
      e.preventDefault();
      if(name && email && password){
          setEmail("")
          setName("")
          setPassword("")
          setLogin(true)
          dispatch(update({name,email,password}))
      } 
     
    };
    const handleConfirm = () => {
      setDeleting(false) 
      setLogin(false)
      dispatch(remove(""))
    };

  return (
    <div>
      <section className="form">
         <p className="account">Update Your Account</p> 
         {deleting? <div className="alert"><p>Deleting account 
           cannot be undone <span className="name">{user.name}</span>! <br/>
         You should confirm your password to delete your account.
    If password confirm click confirm button to delete account</p>
    <button className="confirm" onClick={handleConfirm}>confirm</button>
    </div>: ""}
    {!account&& <div className='red'>You don't have an account</div>}
         <button className="daccount"  onClick={handleDelete}>Delete account</button>
         <div className="profile">
             <p>Profile Picture</p>
             <div className="change">
            <div className="pic">
             <img src="" alt="" />
             <p>change</p>
            </div>
             <form action="" className='u'>
            <p className="input">Username</p>
                <input type="text" value={name} placeholder={user.name} 
                onChange={(e) => setName(e.target.value)}/>
            <p className="input">Email</p>
               <input type="email" value={email} placeholder={user.email} 
               onChange={(e) => setEmail(e.target.value)} />
            <p className="input" >password</p>
               <input type="password" value={password} placeholder={user.password}  onChange={(e) => setPassword(e.target.value)}/><br />
               {password && !login ? <div className='reds'>Fill in all your credentials</div>: null}
            <button className="login" onClick={handleUpdate}>update</button>
             </form>
             </div>
         </div>
      </section>
    </div>
  )
}

