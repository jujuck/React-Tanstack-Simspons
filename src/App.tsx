import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header className="p-4 bg-lightgray">
        <h1 className="text-center">Ma bibliothèque de Country</h1>
      </header>
      <Outlet />
    </>
  );
}

export default App;
