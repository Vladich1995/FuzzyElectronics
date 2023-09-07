import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/Authentication/SignUpScreen";
import SignInScreen from "./screens/Authentication/SignInScreen";

function App() {
  return (
        <AppRoutes />
  );
}

export default App;

function AppRoutes() {

    return(
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/signup" element={<SignUpScreen />} exact />
          <Route path="/signin" element={<SignInScreen />} exact />
        </Routes>
      </Router>
    );
}

