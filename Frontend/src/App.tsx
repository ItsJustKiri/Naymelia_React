import {Routes, Route } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Store from './pages/Store'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Store/>}/>
        <Route path="/servicios" element={<Services/>}/>
      </Route>
    </Routes>
  )
}

export default App