import React, { Fragment } from 'react';
import classes from './Header.module.css';
import { FaPrint,FaCloudUploadAlt} from 'react-icons/fa';
import {IoLogInOutline} from "react-icons/io5";
import { authActions} from '../../store/auth';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
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
        <button className={classes.button23} onClick={loginHandler}><Link to='/login'>Login <span><IoLogInOutline/></span></Link>  </button>
      </div>);
      if (auth) {
        logedComponent = (<div>
          <button className={classes.button23} onClick={logoutHandler}><Link to='/'>LogOut <span><IoLogInOutline/></span></Link>  </button>
        </div>);
      }
    return <Fragment>
        <header className={classes.header}>
            <div className={classes.logo}>
              {/* nuimti linka, tada su stilium ok. logoTop i virsu pakelti */}
            <Link to='/home'>
            <span className={classes.logoTop}>Label</span>
            <span className={classes.logoBottom}>Online</span>
            </Link>
            </div>
            <div className={classes.headerButtons}>
            <buton className={classes.headerButtons}><Link to='contact'>Contact Us</Link></buton>
            <buton>print <FaPrint /></buton>
            <buton>csv <FaCloudUploadAlt/></buton>
            {logedComponent}
            </div>
        </header>
    </Fragment>
}

export default Header