import React, {useEffect, useState} from 'react'
import LabelList from '../components/Label/LabelList/LabelList'

const temporaryLabelsDb = [
    {
        id: 1,
        title: 'title 1'
    },
    {
        id: 2,
        title: 'title 2'
    },
    {
        id: 3,
        title: 'title 3'
    },
    {
        id: 4,
        title: 'title 4'
    },
    {
        id: 5,
        title: 'title 5'
    },
]

const Labels = () => {
    const[labelsList,setLabelsList] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/labels')
            .then(response => response.json())
            .then(data => setLabelsList(data.data))
            .catch(error => {
                console.log(error);
            })
    },[])
  return (
    <LabelList labels={labelsList}/>
  )
}

export default Labels
