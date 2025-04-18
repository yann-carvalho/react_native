import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  return (

    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>

  )
}

export default App