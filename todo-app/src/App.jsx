import { TaskContainer } from "./assets/component/TaskContainer/TaskContainer";
import { useState } from "react";
function App() {
  const [isHidden, setIsHidden] = useState(false);
  const[counter, setCounter]=useState(0);
  console.log("App component is rendering");
  return (
    <>
      <TaskContainer />
      {!isHidden && (
        <div
          style={{ backgroundColor: "red", height: "200px", width: "200px" }}
        ></div>
      )}
      <span>{
        counter
        }

      </span>
      <button
        onClick={() => {
          setIsHidden(!isHidden);
          setCounter(counter + 1);
        }}
      >
        Toogle view
      </button>
    </>
  );
}

// We cannot access this component without exporting
// By default export App component from App.jsx file
export default App;