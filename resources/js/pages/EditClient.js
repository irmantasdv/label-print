import React from 'react'
import ClientDetails from '../components/Clients/ClientDetails'
const clientDetailFromDb = {
  name: "name1",
  surname: "surname1",
  email: "email@email1",
  companyName: "company1",
  vatNr: "1231",  
}

const EditClient = () => {
  const editClientHandler = (name) => {

  }
  return (
    <ClientDetails client={clientDetailFromDb} changeClient={editClientHandler} butonName={"Edit"}/>
  )
}

export default EditClient