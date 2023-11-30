import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Setting/Setting";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/chatbot" element={<Setting />} />
          <Route path="/order" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
