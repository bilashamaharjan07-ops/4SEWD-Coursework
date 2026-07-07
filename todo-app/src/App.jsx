import pagetitle from "./assets/component/pagetitle/pagetitle";

function App() {
  return (
    <>
      <pagetitle />
      <h2>Tasks due today</h2>
      <ul>
        <li>
          <span>9:00 AM</span> - <span>Complete task 1</span>
        </li>
        <li>
          <span>9:10 AM</span> - <span>Complete task 2</span>
        </li>
        <li>
          <span>9:15 AM</span> - <span>Complete task 3</span>
        </li>
        <li>
          <span>9:20 AM</span> - <span>Complete task 4</span>
        </li>
        <li>
          <span>9:25 AM</span> - <span>Complete task 5</span>
        </li>
      </ul>
    </>
  );
}

// We cannot access this component without exporting
// By default export App component from App.jsx file
export default App;
