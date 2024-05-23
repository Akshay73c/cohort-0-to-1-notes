import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(() => import("./components/Dashboard"))
import { Landing } from './components/Landing'
// Note the diff in imports and exports

function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={
            <Suspense fallback={"loading"}>
              <Dashboard />
            </Suspense>
          } />

          <Route path='/' element={<Landing />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div >
      <button onClick={() => {
        navigate("/")
      }}>Landing</button>

      <button onClick={() => {
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App
