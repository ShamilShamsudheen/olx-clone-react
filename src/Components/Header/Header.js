import React, { useContext } from 'react';
import { AuthContext, FirebaseContext } from '../../store/Context';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENG </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <span>Welcome {user.displayName}</span>:<span onClick={()=>{
            navigate('/login')
          }} >Login</span>}
          <hr />
        </div>
        {user && <span className='logout' onClick={()=>{
          firebase.auth().signOut().then(() =>{
            alert('Log Out')
            navigate('/login')
          })
        }} >Logout</span>}
        <div onClick={()  =>navigate('/create')} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
