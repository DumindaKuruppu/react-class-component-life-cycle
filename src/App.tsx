import React, {useState} from 'react';
import './App.css';
import ClassComponent from "./ClassComponent";

function App() {

  const [isEnabled, setIsEnabled] = useState(true)
  const [enableShouldComponentUpdate, setEnableShouldComponentUpdate] = useState(true)
  const [isErrorComponentRendered, setIsErrorComponentRendered] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "flex", height: 300}}>
          <div style={{
            height: 200,
            width: 300,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20
          }}>
            <button onClick={() => setIsEnabled(prevState => !prevState)}>Enable Class Component</button>
            <button
              onClick={() =>
                setEnableShouldComponentUpdate(prevState => !prevState)}>
              {`isEnableShouldComponentUpdate : ${enableShouldComponentUpdate}`}
            </button>
            <button
              onClick={() =>
                setIsErrorComponentRendered(prevState => !prevState)}>
              {`isErrorComponentRendered : ${isErrorComponentRendered}`}
            </button>
          </div>
          <div style={{height: 300, width: 300}}>
            {isEnabled && <ClassComponent
                enableShouldComponentUpdate={enableShouldComponentUpdate}
                isRenderComponentRendered={isErrorComponentRendered}
            />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
