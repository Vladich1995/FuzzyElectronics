import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/Authentication/SignUpScreen";
import SignInScreen from "./screens/Authentication/SignInScreen";
import AccountScreen from "./screens/AccountScreen";

function App() {
  return (
        <AppRoutes />
  );
}

export default App;

function AppRoutes() {

    return(
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/signup" element={<SignUpScreen />} exact />
            <Route path="/signin" element={<SignInScreen />} exact />
            <Route path="/account" element={<AccountScreen />} exact />
          </Routes>
        </Router>
      </AuthProvider>
    );
}

