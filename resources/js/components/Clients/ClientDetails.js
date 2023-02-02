import React from 'react';
import useInput from '../../hooks/use-input';
import useValidation from '../../hooks/use-Validation';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './ClientDetails.module.css';

const ClientDetails = (props) => {
  const {name,surname,email,companyName,vatNr} = props.client;
  const {
    isValidEmail,
    invalidEmailMessage,
    invalidPasswodMessage,
    isValidPassword,
    isValidText
  } = useValidation();
  const {
    inputValue: nameValue,
    inputValid: nameIsValid,
    inputError: nameError,
    inputValueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName
  } = useInput(isValidText);
  const {
    inputValue: surnameValue,
    inputValid: surnameIsValid,
    inputError: surnameError,
    inputValueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    resetInput: resetSurname
  } = useInput(isValidText);
  const {
    inputValue: vatValue,
    inputValid: vatIsValid,
    inputError: vatError,
    inputValueChangeHandler: vatChangeHandler,
    inputBlurHandler: vatBlurHandler,
    resetInput: resetVat
  } = useInput(isValidText);
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
  const {
    inputValue: repasswordValue,
    inputValid: repasswordIsValid,
    inputError: repasswordError,
    inputValueChangeHandler: repasswordChangeHandler,
    inputBlurHandler: repasswordBlurHandler,
    resetInput: resetRePassword
  } = useInput(isValidPassword);

  const {
    inputValue: companyValue,
    inputValid: companyIsValid,
    inputError: companyError,
    inputValueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    resetInput: resetCompany
  } = useInput(isValidText);

 // const formIsValid = companyValue ? nameIsValid && passwordIsValid && repasswordIsValid && companyIsValid && surnameIsValid && emailIsValid : nameIsValid && passwordIsValid && repasswordIsValid && surnameIsValid && emailIsValid;
  const formIsValid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      resetName();
      resetPassword();
      resetCompany();
      resetSurname();
      resetEmail();
      resetRePassword();
    }
    const changedClient = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
      companyName: companyValue,
      vat: vatValue,
      password: passwordValue
    }
    props.changeClient({changedClient})
  }
  return (
    <Card className={classes.card}>
      <form onSubmit={submitFormHandler}>
        {/* <div className=''>
          <label htmlFor="name">Name</label>
          <input
            type='text'
            id='name'
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            placeholder={name}
          />
          {nameError && (
            <p className={classes.error}>Enter valid name</p>
          )}
        </div>
        <div className=''>
          <label htmlFor="surname">Surname</label>
          <input
            type='text'
            id='surname'
            value={surnameValue}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            placeholder={surname}
          />
          {surnameError && (
            <p className={classes.error}>Enter valid surname</p>
          )}
        </div> */}
        <div className=''>
          <label htmlFor="name">Email</label>
          <input
            type='text'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder={email}
          />
          {emailError && (
            <p className={classes.error}>{invalidEmailMessage}</p>
          )}
        </div>
        {/* <div className=''>
          <label htmlFor="name">Company name</label>
          <input
            type='text'
            id='company'
            value={companyValue}
            onChange={companyChangeHandler}
            onBlur={companyBlurHandler}
            placeholder={companyName}
          />
          {companyValue.trim().length < 2 && companyValue && (
            <p className={classes.error}>Please enter Company name</p>
          )}
        </div> */}
        {companyValue && <div className=''>
          <label htmlFor="vat">Vat number</label>
          <input
            type='text'
            id='vat'
            value={vatValue}
            onChange={vatChangeHandler}
            onBlur={vatBlurHandler}
            placeholder={vatNr}
          />
          {vatError && (
            <p className={classes.error}>Enter valid vat number</p>
          )}
        </div>}

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
        {/* <div className=''>
          <label htmlFor="name">Repeat Password</label>
          <input
            type='password'
            id='repassword'
            value={repasswordValue}
            onChange={repasswordChangeHandler}
            onBlur={repasswordBlurHandler}
          />
          {repasswordError && (
            <p className={classes.error}>{invalidPasswodMessage}</p>
          )}
        </div> */}
        <Button disabled={!formIsValid} className={!formIsValid ? classes.disabled : ''} type="submit">{props.butonName}</Button>
      </form>
    </Card>
  )
}

export default ClientDetails