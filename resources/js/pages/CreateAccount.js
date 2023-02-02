import React, { useState } from 'react'
import ClientDetails from '../components/Clients/ClientDetails'
import classes from './CreateAccount.module.css'

const CreateAccount = () => {
  const [submitedFom, setFormSubmited] = useState(false);
  const [formMessage, setFormMessage] = useState(null);
  const [formSucess, setFormSucess] = useState(false);

  const createClient = (details) => {
    console.log(details.changedClient.email);
    // http://localhost/php/api/utilities/Users.php
    // fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyBO5MPC96EMKmR1lF8C-ClUzuc3Prhow', {
      fetch('http://localhost:3000/php/api/utilities/Users.php', { 
      method: 'POST',
      body: JSON.stringify({
        email: details.changedClient.email,
        password: details.changedClient.password,
      }),
      headers: { 
        'Content-Type': 'Application/json',
        'Access-control-Allow-Origin': '*'
    }
    }).then(res => {
      if (1 === 1) {
        // setFormMessage("User created.")
        // setFormSucess(true);
        console.log(res);
        //...
      } else {
        return res.json().then((data) => {
          setFormSubmited(true);
          setFormMessage("User Creation failed.");
          if (data && data.error && data.error.message) {
            setFormMessage(data.error.message);
          }
          //...show error
          console.log(data);
        })
        //...
      }
    })
  }
  return (
    <>
      {submitedFom && formMessage && formSucess && <div className={classes.sucsess}><p>{formMessage}</p></div>}
      {submitedFom && formMessage && !formSucess && <div className={classes.alert}><p>{formMessage}</p></div>}
      <ClientDetails client={[]} butonName={"Create"} changeClient={createClient} />
    </>

  )
}

export default CreateAccount