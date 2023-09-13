import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { CartProvider } from "./components/Contexts/CartContext";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/Authentication/SignUpScreen";
import SignInScreen from "./screens/Authentication/SignInScreen";
import AccountScreen from "./screens/AccountScreen";
import CustomerHomeScreen from "./screens/CustomerHomeScreen";
import OnSaleItemScreen from "./screens/OnSaleItemScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
        <AppRoutes />
  );
}

export default App;

function AppRoutes() {

    return(
      <AuthProvider>
          <CartProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomeScreen />} exact />
                <Route path="/signup" element={<SignUpScreen />} exact />
                <Route path="/signin" element={<SignInScreen />} exact />
                <Route path="/account" element={<AccountScreen />} exact />
                <Route path="/home" element={<CustomerHomeScreen />} exact />
                <Route path="/onsale" element={<OnSaleItemScreen />} exact />
                <Route path="/cart" element={<CartScreen />} exact />
              </Routes>
            </Router>
        </CartProvider>
      </AuthProvider>
    );
}

