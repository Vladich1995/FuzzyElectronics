import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BuildByYourselfScreen from "./screens/BuildByYourselfScreen";
import AdminScreen from "./screens/AdminScreen";
import { AuthProvider, useAuth } from './components/contexts/AuthProvider';
import { CartProvider } from './components/contexts/CartProvider';

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </CartProvider>
  );
}

export default App;

function AppRoutes() {
  const { authUser } = useAuth();

  if(authUser != null){
    return (
      <Router>
        <Routes>
          {authUser.email != "alex@gmail.com" ? (
            <>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/buildByYourself" element={<BuildByYourselfScreen />} exact />
            </>
          ) : (
            <Route path="/" element={<AdminScreen />} exact/>
          )}
        </Routes>
      </Router>
    );
  }
  else {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/buildByYourself" element={<BuildByYourselfScreen />} exact />
        </Routes>
      </Router>
    );
  }
}
