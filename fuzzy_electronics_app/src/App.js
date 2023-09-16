import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { CartProvider } from "./components/Contexts/CartContext";
import { BuildProvider } from "./components/Contexts/BuildContext";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/Authentication/SignUpScreen";
import SignInScreen from "./screens/Authentication/SignInScreen";
import AccountScreen from "./screens/AccountScreen";
import CustomerHomeScreen from "./screens/CustomerHomeScreen";
import OnSaleItemScreen from "./screens/ItemScreens/OnSaleItemScreen";
import CartScreen from "./screens/CartScreen";
import AdminScreen from "./screens/AdminScreens/AdminScreen";
import ClientsScreen from "./screens/AdminScreens/ClientsScreen";
import CreateBuildScreen from "./screens/AdminScreens/CreateBuildScreen";
import WaitingOrdersScreen from "./screens/AdminScreens/WaitingOrdersScreen";
import DoneDealsScreen from "./screens/AdminScreens/DoneDealsScreen";
import AdminAccountScreen from "./screens/AdminAccountScreen";
import CasesItemScreen from "./screens/CreateBuildScreens/CasesItemScreen";
import CapacityItemScreen from "./screens/CreateBuildScreens/CapacityItemScreen";
import CPUItemScreen from "./screens/CreateBuildScreens/CPUItemScreen";
import MBItemScreen from "./screens/CreateBuildScreens/MBItemScreen";
import MemoryItemScreen from "./screens/CreateBuildScreens/MemoryItemScreen";
import PCSystemItemScreen from "./screens/CreateBuildScreens/PCSystemItemScreen";
import PeripheralsItemScreen from "./screens/CreateBuildScreens/PeripheralsItemScreen";
import PSUItemScreen from "./screens/CreateBuildScreens/PSUItemScreen";
import VGAItemScreen from "./screens/CreateBuildScreens/VGAItemScreen";

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
          <BuildProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomeScreen />} exact />
                <Route path="/signup" element={<SignUpScreen />} exact />
                <Route path="/signin" element={<SignInScreen />} exact />
                <Route path="/account" element={<AccountScreen />} exact />
                <Route path="/home" element={<CustomerHomeScreen />} exact />
                <Route path="/onsale" element={<OnSaleItemScreen />} exact />
                <Route path="/cart" element={<CartScreen />} exact />
                <Route path="/admin" element={<AdminScreen />} exact />
                <Route path="/createbuild" element={<CreateBuildScreen />} exact />
                <Route path="/waitingorders" element={<WaitingOrdersScreen />} exact />
                <Route path="/donedeals" element={<DoneDealsScreen />} exact />
                <Route path="/clients" element={<ClientsScreen />} exact />
                <Route path="/adminaccount" element={<AdminAccountScreen />} exact />
                <Route path="/casesbuild" element={<CasesItemScreen />} exact />
                <Route path="/capacitybuild" element={<CapacityItemScreen />} exact />
                <Route path="/cpubuild" element={<CPUItemScreen />} exact />
                <Route path="/mbbuild" element={<MBItemScreen />} exact />
                <Route path="/memorybuild" element={<MemoryItemScreen />} exact />
                <Route path="/pcsystembuild" element={<PCSystemItemScreen />} exact />
                <Route path="/peripheralsbuild" element={<PeripheralsItemScreen />} exact />
                <Route path="/psubuild" element={<PSUItemScreen />} exact />
                <Route path="/vgabuild" element={<VGAItemScreen />} exact />
              </Routes>
            </Router>
          </BuildProvider>
        </CartProvider>
      </AuthProvider>
    );
}

