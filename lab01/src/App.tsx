import { FC, useState } from "react";
import Keyboard from "./components/Keyboard";
import "./App.css";

const App: FC = () => {
  const [inputString, setInputString] = useState<string | null>(null);

  const handleKeyClick = (key: string) => {
    if (key === "Backspace") {
      setInputString((prev) => (prev ? prev.slice(0, -1) : ""));
    } else if (key === "Enter") {
      setInputString((prev) => (prev ?? "") + "\n");
    } else if (key === "Space") {
      setInputString((prev) => (prev ?? "") + " ");
    } else if (key === "Tab") {
      setInputString((prev) => (prev ?? "") + "\t");
    } else {
      setInputString((prev) => (prev ?? "") + key);
    }
  };

  return (
    <div className="App">
      {inputString && (
        <div className="pressed-key-display">
          <h2>{inputString}</h2>
        </div>
      )}
      <Keyboard onKeyClick={handleKeyClick} />
      
    </div>
  );
};

export default App;
