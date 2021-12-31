import React from "react";
// import { incNumber } from "../../../react-redux/src/actions";
import "./Appc.css";
import { incNumber,decNumber } from "./actions/index";
import { useSelector,useDispatch } from "react-redux";
// import { changeTheNumber } from "./reducer/upDown"


function App() {
  const dispatch = useDispatch()

  const myState = useSelector((state) => state.changeTheNumber)
  return (
    <div className="App">
      <h1>increment/decreament</h1>
      <div className="quantity">
        <a className="quantity_plus" title="increment" onClick ={() => dispatch(incNumber())}><span> + </span></a>
        <input type="text" className="redux" value={myState} />
        <a className="quantity_minus" title="decrement" onClick={() => dispatch(decNumber())}>
          <span> - </span></a>
      </div>
    </div>
  );
}

export default App;
