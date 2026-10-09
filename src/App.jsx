import './App.css'
import SimpleCalc from './pages/SimpleCalc'
import AdvancedCalc from './pages/AdvancedCalc'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/simple' element={<SimpleCalc/>}/>
        <Route path='/advanced' element={<AdvancedCalc/>}/>
        <Route path='/' element={<Navigate to="/simple"/>}/>
      </Routes>
    </>
  )
}

export default App
