import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions} from './store/auth';
import {labelSizeActions} from './store/labelSize';
const App = () => {
  const auth = useSelector(state => state.auth.auth);
  const labelSize = useSelector(state => state.labelSize.labelSize);
  const dispatch = useDispatch();
  const heightRef = useRef();
  const widthRef = useRef();


  const loginHandler = () => {
    dispatch(authActions.login());
  }
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  const labelSizeChangeHandler = (e) => {
    e.preventDefault();
    const height = heightRef.current.value;
    const width = widthRef.current.value;
    if(height){
      dispatch(labelSizeActions.changeHeight(height));
      heightRef.current.value = '';
    }
    if(width){
      dispatch(labelSizeActions.changeWidth(width));
      widthRef.current.value = '';
    }
  }
  let logedComponent = (<div>
    <button onClick={loginHandler}>Login</button>
  </div>);
  if (auth) {
    logedComponent = (<div>
      <button onClick={logoutHandler}>LogOut</button>
    </div>);
  }
  return (
    <div>
      <h1>Label project</h1>
      <header>
        {logedComponent}
        <div>
          <h2>Change label size</h2>
        <form>
          <label htmlFor="height">Heigth</label>
          <input placeholder="" type='number' min='1' max='1000' ref={heightRef}/>
          <label htmlFor="width">Width</label>
          <input type='number' min='1' max='1000' ref={widthRef}/>
          <button onClick={labelSizeChangeHandler}>Submit</button>
        </form>
        </div>
        <p>Label height: {labelSize.height}</p>
        <p>Label width: {labelSize.width}</p>
      </header>
    </div>
  );
}

export default App;
