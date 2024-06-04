import "./App.css";
import { DefaultButton } from "@fluentui/react";

function App() {
  return (
    <>
      <DefaultButton text="Click Me" onClick={() => alert("Button Clicked!")} />
    </>
  );
}

export default App;
