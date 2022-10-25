import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import classes from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const submitLoginFormHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }
    return (
        <Card className={classes.card}> 
            <form className={classes.form}>
                <div className='control-group'>
                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                </div>
                <div className='form-actions'>
                    <button onClick={submitLoginFormHandler}>Login</button>
                </div>
            </form>
        </Card>

    )
}

export default Login