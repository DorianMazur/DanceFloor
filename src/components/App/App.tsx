import React, { useState, useEffect } from "react";
import { Dimensions } from "../../types/canvas";
import DanceFloor from "../DanceFloor/DanceFloor";
import LoadableContent from "../LoadableContent/LoadableContent";
import "./App.css";

const someDefaultConfig: Dimensions = {
  columns: 4,
  rows: 3,
};

const App: React.FC = () => {
  const [config, setConfig] = useState<null | Dimensions>(null);

  useEffect(() => {
    setTimeout(() => {
      setConfig(someDefaultConfig);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <LoadableContent loading={config === null}>
        <DanceFloor dimensions={config as Dimensions} />
      </LoadableContent>
    </div>
  );
};

export default App;
