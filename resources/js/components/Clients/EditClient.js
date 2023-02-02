import React from 'react';
import Card from '../UI/Card/Card';


const EditClient = () => {
    const editClientHandler = () => {
 
    }
  return (
    <Card>
    <form onSubmit={editClientHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" ref={nameInputRef} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" ref={ageInputRef} />
      <Button type="submit">Edit</Button>
    </form>
  </Card>
  )
}

export default EditClient