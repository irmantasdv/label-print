import React from 'react'

const Client = (props) => {
    return (
        <div className={props.className}>
            <p>Id: {props.id}</p>
            <p>Email: {props.email}</p>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Account type: {props.isBuisiness ? "Buisiness" : "Private"}</p>
            <p>Subscription: {props.subscription ? "Subscribed" : "None"}</p>
            <p>Account Lock: {props.isLocked ? "Locked" : "Not Locked"}</p>
        </div>
    )
}

export default Client