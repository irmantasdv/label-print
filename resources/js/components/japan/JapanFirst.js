import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LabelOptions from "../Label/LabelOptions/LabelOptions";


const JapanFirst = () => {
  const auth = useSelector(state => state.auth.auth);
  const template = useSelector(state => state.labelComponent.labelComponent);
  const dispatch = useDispatch();
  const templateTitleRef = useRef();
  const [toggleNotLoggedInModal, setToggleNotLoggedInModal] = useState(false);
  const toggleNewTemplateModaleNotLoggedIn = () => {
    setToggleNotLoggedInModal(!toggleNotLoggedInModal);
}

const changeTemplateTite = () => {
  const title = templateTitleRef.current.value;
  dispatch(labelComponentActions.changeTitle(title));

}
const SaveTemplateHandler = () => {

  const temArray = [];
  temArray.push(template);
  console.log(template);
}
  return (
    <div>
      <div>
        <button>He</button>
        <input type='text' ref={templateTitleRef}/>
      </div>
        <LabelOptions />

    </div>
  )
}

export default JapanFirst
