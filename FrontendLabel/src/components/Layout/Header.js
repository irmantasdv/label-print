import React, { Fragment } from 'react';
import classes from './Header.module.css';
import { FaPrint,FaCloudUploadAlt} from 'react-icons/fa';
import {IoLogInOutline} from "react-icons/io5";
import { authActions} from '../../store/auth';
import { useDispatch, useSelector } from "react-redux";
const Header = (props) => {
    const auth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authActions.login());
      }
      const logoutHandler = () => {
        dispatch(authActions.logout());
      }
    let logedComponent = (<div>
        <button className={classes.button23} onClick={loginHandler}>Login <span><IoLogInOutline/></span> </button>
      </div>);
      if (auth) {
        logedComponent = (<div>
          <button className={classes.button23} onClick={logoutHandler}>LogOut <span><IoLogInOutline/></span> </button>
        </div>);
      }
    return <Fragment>
        <header className={classes.header}>
            <div className={classes.logo}>
            <span className={classes.logoTop}>Label</span>
            <span className={classes.logoBottom}>Online</span>
            </div>
            <div className={classes.headerButtons}>
            <buton>print <FaPrint /></buton>
            <buton>csv <FaCloudUploadAlt/></buton>
            {logedComponent}
            </div>
        </header>
    </Fragment>
}

export default Header