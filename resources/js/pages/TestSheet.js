import React from 'react'
import Button from '../components/UI/Button/Button'

const TestSheet = () => {
    const getData = (e) => {
        e.preventDefault();
        
        fetch('https://script.google.com/macros/s/AKfycbz8juCSb2TAqw039lgDH1aI5XPtjkz07ag-G5L2nutdkmwvgULzDoCYIk7KKAvfZX9-/exec',{
            method: 'GET',
            data: '',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        }).then(response => {
            console.log("success:", response);
        }).catch(err => {
            console.log("Error:" + err);
        });
    }
  return (
    <div>
        <form>
            <Button onClick={getData}>Get Data</Button>
        </form>
    </div>
  )
}

export default TestSheet