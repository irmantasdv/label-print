import React, { Fragment } from 'react';
import classes from './Header.module.css';
import { FaPrint, FaCloudUploadAlt } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import { authActions } from '../../store/auth';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
const Header = (props) => {
  const navigation = useLocation();
  const path = navigation.pathname;
  console.log(path);
  const auth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  }
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  let logedComponent = (<div>
    <p onClick={loginHandler}><Link to='/login'>Log in <span><IoLogInOutline /></span></Link></p>
  </div>);
  if (auth) {
    logedComponent = (<div>
      <p onClick={logoutHandler}><Link to='/'>LogOut <span><IoLogInOutline /></span></Link>  </p>
    </div>);
  }
  return <Fragment>
    <header className={classes.header}>
      <Link to='/home'>
        <div className={classes.logo}>
          {/* nuimti linka, tada su stilium ok. logoTop i virsu pakelti */}

          <span className={classes.logoTop}>Label</span>
          <span className={classes.logoBottom}>Online</span>
        </div>
      </Link>
      <div className={classes.headerButtons}>
        {auth && <p className={classes.headerButtons}><Link to='clients'>Clients</Link></p>}
        {auth && <p><Link to='/labels'>Labels</Link></p>}
        {path !== "/contact" && <p className={classes.headerButtons}><Link to='contact'>Contact Us</Link></p>}
        {path === "/home" && <p>print <FaPrint /></p>}
        {auth && <p>csv <FaCloudUploadAlt /></p>}
        {path !== "/login" && logedComponent}
      </div>
    </header>
  </Fragment>
}

export default Header