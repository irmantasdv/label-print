import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './ClientTable.module.css';


const ClientList = (props) => {
  const navigation = useNavigate();
  const editClientHandler = (id) => {
    navigation(`/clients/${id}`);
  }

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Account Type</th>
            <th>Subscription</th>
            <th>Account Lock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.temporaryClientDataFromDb.map(client => {
            return (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.isBuisiness ? "Buisiness" : "Private"}</td>
                <td>{props.subscription ? "Subscribed" : "None"}</td>
                <td>{props.isLocked ? "Locked" : "Not Locked"}</td>
                <td className={classes.clientButtons}><Button onClick={() => editClientHandler(client.id)}>Edit</Button> <Button className={classes.buttonRedShade}>Delete</Button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList