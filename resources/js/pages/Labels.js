import React, { useEffect, useState } from 'react'
import LabelList from '../components/Label/LabelList/LabelList'


const Labels = () => {
    const [labelsList, setLabelsList] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/labels')
            .then(response => response.json())
            .then(data => setLabelsList(data.data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <LabelList labels={labelsList} />
    )
}

export default Labels
