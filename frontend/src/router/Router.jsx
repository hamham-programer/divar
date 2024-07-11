import { Route, Routes } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import HomePage from "../pages/HomePage"
import DashboardPage from "../pages/DashboardPage"
import AdminPage from "../pages/AdminPage"
import PageNotFound from "../pages/404"
import AuthPage from "../pages/AuthPage"
import { getProfile } from "../services/user"

function Router() {
    const {data, isLoading, error} = useQuery(["profile"], getProfile)
    console.log({data, isLoading, error})
  return (
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/dashboard" element={<DashboardPage />}/>
    <Route path="/auth" element={<AuthPage />}/>
    <Route path="/admin" element={<AdminPage />}/>
    <Route path="*" element={<PageNotFound />}/>
  </Routes>
  )
}

export default Router