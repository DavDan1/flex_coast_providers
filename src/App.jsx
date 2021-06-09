import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Authentication from './modules/Authentication'
import './styles/globals.css'
import './styles/styles.css'
import Sidebar from './components/Sidebar'
import BrokerDashboard from './views/BrokerDashboard'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import PhoneSidebar from './components/PhoneSidebar'
import LoginLandingPage from './components/LoginLandingPage'

const App = () => {
  const { authenticated } = useSelector((state) => state)
  useEffect(() => {
    Authentication.validateToken()
  }, [authenticated])
  const isSmall = useMediaQuery('(max-width:820px)')

  return (
    <>
      {authenticated ? (
        <>
          {isSmall ? <PhoneSidebar /> : <Sidebar />}
          <BrokerDashboard />
        </>
      ) : (
        <LoginLandingPage />
      )}
    </>
  )
}

export default App
