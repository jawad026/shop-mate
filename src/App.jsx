import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Setting/Setting";
import ProductPage from "./pages/ProductPage/ProductPage";
import AppAli from "./AppAli";

import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/chatbot" element={<Setting />} />
          <Route path="/order" element={<ProductPage />} />
        </Route>
      </Routes>
{/* <AppAli/> */}


      

    </>
  );
}
export default App;
