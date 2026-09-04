import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/common/Layout"
import Dashboard from "./pages/Dashboard"
import ApplicationsList from "./pages/ApplicationsList"
import AddApplication from "./pages/AddApplication"
import ApplicationDetails from "./pages/ApplicationDetails"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<ApplicationsList/>} />
          <Route path="/applications/new" element={<AddApplication/>} />
          <Route path="/applications/:id" element={<ApplicationDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
