import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Router from "./Router/Router";
import { useEffect } from "react";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
