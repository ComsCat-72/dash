import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Dashboard from "./pages/components/dashboard/Dashboard";
import { ContextProvider } from "./pages/AppContextsAndData/ContextData";

const All = () => (
  <ContextProvider>
    <Home />
  </ContextProvider>
);

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<All />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App;
