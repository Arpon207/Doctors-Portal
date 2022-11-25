import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Router from "./Router/Router";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
