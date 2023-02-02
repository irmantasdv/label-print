import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import Card from '../components/UI/Card/Card';
import useInput from '../hooks/use-input';
import useValidation from '../hooks/use-Validation';
import classes from './Login.module.css';

const Login = () => {

    const {
        isValidEmail,
        invalidEmailMessage,
        invalidPasswodMessage,
        isValidPassword
      } = useValidation();
      const {
        inputValue: emailValue,
        inputValid: emailIsValid,
        inputError: emailError,
        inputValueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail
      } = useInput(isValidEmail);
      const {
        inputValue: passwordValue,
        inputValid: passwordIsValid,
        inputError: passwordError,
        inputValueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetInput: resetPassword
      } = useInput(isValidPassword);
    
    const navigate = useNavigate();

    const formIsValid = emailIsValid && passwordIsValid;

    const submitCreateAccountFormHandler = (event) => {
        event.preventDefault();
        navigate('/create-account');
    }
   
    const submitFormHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
          resetEmail();
          resetPassword();
        }
      }
    return (
        <Card className={classes.card}> 
            <form className={classes.form} onSubmit={submitFormHandler}>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input
            type='email'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailError && (
            <p className={classes.error}>{invalidEmailMessage}</p>
          )}
        </div>
        <div className=''>
          <label htmlFor="name">Password</label>
          <input
            type='password'
            id='password'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordError && (
            <p className={classes.error}>{invalidPasswodMessage}</p>
          )}
        </div>
        <div className={classes.formActions}>
        <Button>Login</Button>
        <Button onClick={submitCreateAccountFormHandler}>Create An Account</Button>
        </div>
      </form>

        </Card>

    )
}

export default Login