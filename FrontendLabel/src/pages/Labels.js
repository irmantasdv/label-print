import React from 'react'
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
  return (
    <LabelList labels={temporaryLabelsDb}/>
  )
}

export default Labels