import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './components/pages/Dashboard'
import DollarCard from './components/pages/DollarCard' 
import Payment from './components/pages/Payment'
import Transaction from './components/pages/Transaction'
import Calculator from './components/pages/Calculator'
import Sidebar from './components/Sidebar'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Sidebar>
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/dollarcard' element={<DollarCard />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/calculator' element={<Calculator />} />
     </Routes>
     </Sidebar>
    </BrowserRouter>
    </>
  )
}

export default App
