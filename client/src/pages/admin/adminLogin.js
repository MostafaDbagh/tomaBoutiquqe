import React,{useState} from 'react';
import logo from '../../assests/images/logo.png'
import './index.css'
import { useSelector,useDispatch } from 'react-redux';
import {setAuthenticated} from '../../redux/reducer/authReducer'
import { adminLogin } from '../../api/productApi';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const auth = useSelector(state =>state.auth.isAuthenticated);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit =  async (e) => {
      e.preventDefault();
      const data = {email:username,password};
       const res = adminLogin(data).then(res=> {
        if(res.success){
            dispatch(setAuthenticated(true))
            navigate('/admin/products')
        }
       }).catch(err =>{
        console.error('there is an error ')
       })

    };
  
    return (
        <div className='d-flex'>
            {console.log(auth,"auth")}
<div className='left-side d-flex justify-content-center align-items-center ' style={{width:'50%',background:'#ffd1da'}}>
<img src={logo} alt='toma-boutique' width={260} height={100} />
</div>
<div className='right-side p-5 ' style={{width:'50%'}}>
    <p className='text-center' style={{fontSize:'38px',fontFamily:'oswald'}}>Admin Login</p>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group my-5" style={{position:'relative',height:'100px'}}>
            <label htmlFor="username" style={{position:'absolute',top:'-30px',color:'#212529',fontFamily:'lato'}}>Username :</label>
            <input
            className='addProductInput p-3'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{width:'90% !important',margin:'0 ',height:'76px '}}
            />
          </div>
          <div className="input-group my-5" style={{position:'relative',height:'100px'}}>
            <label htmlFor="password" style={{position:'absolute',top:'-30px',color:'#212529',fontFamily:'lato'}}>Password :</label>
            <input
              type="password"
              id="password"
              className='addProductInput'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{width:'90% !important',margin:'0',height:'76px'}}
            />
          </div>
          <button  className="submit-button bgPink" style={{width:'100%',height:'70px',fontFamily:'lato'}}>Submit</button>
        </form>
      </div>
      </div>
      </div>

    )
}
 
export default AdminLogin;