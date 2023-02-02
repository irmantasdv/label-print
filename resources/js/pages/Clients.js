import React from 'react';
import { NavLink } from 'react-router-dom';
import ClientTable from '../components/Clients/ClientTable';
import Button from '../components/UI/Button/Button';
import classes from './Clients.module.css';

const temporaryClientDataFromDb = [
  {
    id: 1,
    name: 'Jonas',
    surname: 'Jonaitis',
    email: 'asd@sdfs.lt',
    isBuisiness: false,
    subscription: false,
    isLocked: false
  },
  {
    id: 2,
    name: 'Jonas2',
    surname: 'Jonaiti2',
    email: 'asd@sdfs.lt2',
    isBuisiness: false,
    subscription: false,
    isLocked: false
  },
  {
    id: 3,
    name: 'Jonas3',
    surname: 'Jonaitis3',
    email: 'asd@sdfs.lt3',
    isBuisiness: true,
    subscription: false,
    isLocked: false
  },

]

const Clients = () => {

  return (
    <React.Fragment>
      <div className={classes.CreateClientButtonContainer}>
        <Button><NavLink to={'/create-account'}>Create Client</NavLink></Button>
      </div>
      <ClientTable temporaryClientDataFromDb={temporaryClientDataFromDb} />
    </React.Fragment>
  )
}

export default Clients
