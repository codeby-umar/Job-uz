import Goals from "./pages/Goals";
import Budget from "./pages/Budget";
import Sign from "./pages/Auth/Sign";
import Reports from "./pages/Reports";
import Layout from "./layouts/Layout";
import Login from './pages/Auth/Login';
import HomePages from "./pages/HomePages";
import Dashborads from "./pages/DashboradPages";
import Transactions from "./pages/Transactions";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><HomePages /></Layout>} />
        <Route path='/dashborad' element={<Layout><Dashborads /></Layout>} />
        <Route path='/dashborad' element={<Layout><Transactions /></Layout>} />
        <Route path='/dashborad' element={<Layout><Budget /></Layout>} />
        <Route path='/dashborad' element={<Layout><Goals /></Layout>} />
        <Route path='/dashborad' element={<Layout><Reports /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign />} />
      </Routes>
    </div>
  )
}

export default App