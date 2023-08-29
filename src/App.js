import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (event) => {
    let v = event.target.value;

    let value = parseInt(v) ? parseInt(v) : v;
    let type = parseInt(v) ? APPLY_NUMBER : CHANGE_OPERATION;

    dispatch({ type: type, payload: value });
  };

  const resetClickHandler = (e) => {
    dispatch({ type: CLEAR_DISPLAY, payload: initialState });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation: </b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory: </b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  dispatch({ type: MEMORY_ADD });
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch({ type: MEMORY_RECALL });
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch({ type: MEMORY_CLEAR });
                }}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={clickHandler} />
              <CalcButton value={2} onClick={clickHandler} />
              <CalcButton value={3} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={clickHandler} />
              <CalcButton value={5} onClick={clickHandler} />
              <CalcButton value={6} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={clickHandler} />
              <CalcButton value={8} onClick={clickHandler} />
              <CalcButton value={9} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={clickHandler} />
              <CalcButton value={"*"} onClick={clickHandler} />
              <CalcButton value={"-"} onClick={clickHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={resetClickHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
