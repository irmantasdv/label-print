import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LabelList from '../components/Label/LabelList/LabelList'
import { labelListActions } from '../store/labels';
const lbl = [
  {
    "height": 200,
    "width": 500,
    "backGroundColor": "blue",
    "sizeDescription": 12,
    "imageBorder": "none",
    "backgImage": "",
    "colorSku": "blue",
    "sizeSku": 14,
    "fontWeightSku": "",
    "fontWeightDescription": "",
    "descriptionTextColor": "",
    "descriptionBorder": "none",
    "skuBorder": "none",
    "sku": "A234",
    "title": "House",
    "description": "best house ever",
    "imageUrl": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    "barcode": "12235262x"
  },
  {
    "height": 400,
    "width": 300,
    "backGroundColor": "white",
    "sizeDescription": 12,
    "imageBorder": "none",
    "backgImage": "",
    "colorSku": "",
    "sizeSku": 14,
    "fontWeightSku": "",
    "fontWeightDescription": "",
    "descriptionTextColor": "",
    "descriptionBorder": "none",
    "skuBorder": "none",
    "sku": "B345",
    "title": "Candle",
    "description": "best candel ever",
    "imageUrl": "https://media.istockphoto.com/id/157187128/photo/holiday-candlelight-service-or-memorial-vigil.jpg?s=612x612&w=0&k=20&c=R5I-CatZCs7vl8e3A1polwkRgNYIiOMN_IiuTR04lf8=",
    "barcode": "456364434"
  },
  {
    "height": 400,
    "width": 300,
    "backGroundColor": "white",
    "sizeDescription": 12,
    "imageBorder": "none",
    "backgImage": "",
    "colorSku": "",
    "sizeSku": 14,
    "fontWeightSku": "",
    "fontWeightDescription": "",
    "descriptionTextColor": "",
    "descriptionBorder": "none",
    "skuBorder": "none",
    "sku": "C78",
    "title": "Table",
    "description": "best table ever",
    "imageUrl": "https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg?f=s",
    "barcode": "5332234"
  },
  {
    "height": 400,
    "width": 300,
    "backGroundColor": "white",
    "sizeDescription": 12,
    "imageBorder": "none",
    "backgImage": "",
    "colorSku": "",
    "sizeSku": 14,
    "fontWeightSku": "",
    "fontWeightDescription": "",
    "descriptionTextColor": "",
    "descriptionBorder": "none",
    "skuBorder": "none",
    "sku": "GK455",
    "title": "Garden stake",
    "description": "best garden décor ever",
    "imageUrl": "https://media.istockphoto.com/id/507796623/photo/garden-sign-message-on-a-wooden-watering-can.jpg?s=612x612&w=0&k=20&c=FSGOXZplA77n7FzA9AsuVFfW7C7lbZJVgYhB_hjw7iI=",
    "barcode": "34253245"
  },
  {
    "height": 400,
    "width": 300,
    "backGroundColor": "white",
    "sizeDescription": 12,
    "imageBorder": "none",
    "backgImage": "",
    "colorSku": "",
    "sizeSku": 14,
    "fontWeightSku": "",
    "fontWeightDescription": "",
    "descriptionTextColor": "",
    "descriptionBorder": "none",
    "skuBorder": "none",
    "sku": ""
  }
]

const Labels = () => {
  const [labelsList, setLabelsList] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const labelsStateRedux = useSelector(state => state.labels.labelsList);
  const dispatch = useDispatch();


  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/labels')
      .then(response => response.json())
      .then(data => {
        setLabelsList(data.labels)
        console.log(data.labels)
        dispatch(labelListActions.fetchLabelItems(data.labels))
      })
      .catch(error => {
        console.log(error); 
      })
  }, [])
  const deleteLabelById = (id) => {
    fetch(`http://127.0.0.1:8000/api/labels/${id}`,
      {
          method: 'DELETE'
      }
  )
      // .then(dispatch(templateActions.removeTemplateFromItems(id)))
      .then( response => {
        dispatch(labelListActions.removeLabelFromItems(id))
        fetch('http://127.0.0.1:8000/api/labels')
      .then(response => response.json())
      .then(data => {
        setLabelsList(data.labels)
        console.log(data.labels)
        dispatch(labelListActions.fetchLabelItems(data.labels))
      })
      .catch(error => {
        console.log(error); 
      })

      })
      .catch(error => console.log(error))

}
useEffect(() => {

}, [deleted]);
  return (
    <LabelList labels={labelsStateRedux} deleteLabelHandler={deleteLabelById}/>

  )
}

export default Labels
