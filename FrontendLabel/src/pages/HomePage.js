import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "../components/Label/Label/Label";
import LabelOptions from "../components/Label/LabelOptions/LabelOptions";
import { labelSizeActions } from '../store/labelSize';
import classes from './HomePage.module.css';

const HomePage = () => {
  const labelSize = useSelector(state => state.labelSize.labelSize);
  const dispatch = useDispatch();
  const heightRef = useRef();
  const widthRef = useRef();

  const labelSizeChangeHandler = (e) => {
    e.preventDefault();
    const height = heightRef.current.value;
    const width = widthRef.current.value;
    if (height) {
      dispatch(labelSizeActions.changeHeight(height));
      heightRef.current.value = '';
    }
    if (width) {
      dispatch(labelSizeActions.changeWidth(width));
      widthRef.current.value = '';
    }
  }
  return (
    <Fragment>
      <main className={classes.main}>
        <LabelOptions />
        <Label />
      </main>
      <div className={classes.labelSizeHandler}>
        <h2>Change label size</h2>
        <form className={classes.form}>
          <label htmlFor="height">Heigth</label>
          <input placeholder="" type='number' min='1' max='1000' ref={heightRef} />
          <label htmlFor="width">Width</label>
          <input type='number' min='1' max='1000' ref={widthRef} />
          <button onClick={labelSizeChangeHandler}>Submit</button>
        </form>
        <div>        
          <p>Label height: {labelSize.height}</p>
          <p>Label width: {labelSize.width}</p></div>
      </div>

    </Fragment>
  );
}

export default HomePage;
