import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Setting/Setting";
import ProductPage from "./pages/ProductPage/ProductPage";

import "./App.css";
import Login from "./pages/Login/Login";
import Faq from "./pages/Questions/Faq";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shop/*" element={<Layout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="chatbot" element={<Setting />} />
          <Route path="order" element={<ProductPage />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
