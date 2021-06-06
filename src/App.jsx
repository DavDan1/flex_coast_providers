import React from 'react'
import './styles/globals.css'
import './styles/styles.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import BrokerDashboard from './views/BrokerDashboard'

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <BrokerDashboard />
    </>
  )
}

export default App
