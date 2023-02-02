import { FaPrint, FaCloudUploadAlt } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import classes from './Header.module.css';
import {NavLink, useLocation} from "react-router-dom";
import {authActions} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";

const Navigation = () => {
    const navigation = useLocation();
    const path = navigation.pathname;
    const auth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authActions.login());
    }
    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
    let logedComponent = (
            <NavLink to={'/login'} onClick={loginHandler} className="nav-link active">LogIn<span><IoLogInOutline size={20}/></span></NavLink>);
    if (auth) {
        logedComponent = (
                <NavLink to={'/'} onClick={logoutHandler} className="nav-link active">LogOut<span><IoLogInOutline size={20}/></span></NavLink>);
    }
    return(

        <nav className={`navbar navbar-expand-lg  text-bg navbar-dark py-4 noPrint ${classes.navigationCustom}`}>
                <style>
                    {`@media print {.noPrint{display: none;}}`}
                </style>
            <div className="container-md">
                <NavLink className="navbar-brand" to={'/'}>
                    <div className={classes.logo}>
                        <span className={classes.logoTop}>Label</span>
                        <span className={classes.logoBottom}>Online</span>
                    </div>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {auth && path !=='/clients' && <li className="nav-item">
                            <NavLink to={'/clients'} className="nav-link active" aria-current="page" href="#">Clients</NavLink>
                        </li>}
                        {auth && path !=='/labels' && <li className="nav-item">
                            <NavLink to={'/labels'} className="nav-link active" href="#">Labels</NavLink>
                        </li>}
                        {auth && path !=='/templates' && <li className="nav-item">
                            <NavLink to={'/templates'} className="nav-link active" href="#">Templates</NavLink>
                        </li>}
                        {path !== "/contact" && <li className="nav-item">
                            <NavLink to={'/contact'} className="nav-link active">Contact Us</NavLink>
                        </li>}
                        {path === "/home" && <li className="nav-item">
                            <NavLink to={'/print'} className="nav-link active">Print <span><FaPrint size={20}/></span></NavLink>
                        </li>}
                        {auth && path !=='/upload' && <li className="nav-item">
                             <NavLink to={'/upload'} className="nav-link active">Upload CSV <span><FaCloudUploadAlt size={20}/></span></NavLink>
                        </li>}
                        <li className="nav-item">
                            {path !== "/login" && logedComponent}
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;
