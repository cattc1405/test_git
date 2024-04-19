import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './main/MainTabsNavigation'
import { useSelector } from 'react-redux'
import AuthenStack from './main/Authen/AuthenStack'


const AppNavigation = () => {
  const appState = useSelector(state => state.app) //trong store la app
  // const { isLogin } = useContext(AppContext)
  return (
    <NavigationContainer >
      <AuthenStack />
      {/* {
        appState.user ?<MainStackNavigation /> :
        <AuthenStack /> 
        // appState.user ? <AuthenStack /> :
        // <MainStackNavigation />
           
      } */}

    </NavigationContainer>
  )
}

export default AppNavigation