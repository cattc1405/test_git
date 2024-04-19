import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, Image } from 'react-native'


//tab
import Home from './tab/Home'
import Account from './tab/Account'
import Notification from './tab/Notification'
import Search from './tab/Search'

const tabScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarStyle: { backgroundColor: '#fff' },
    tabBarIcon: ({ focused }) => {
      if (route.name == 'Home') {
        if (focused) {
          return <Image source={require('../../../assets/images/asm/home.png')} />

        } else {
          return <Image source={require('../../../assets/images/asm/home.png')} />
        }
      } else if (route.name == 'Account') {
        if (focused) {
          return <Image source={require('../../../assets/images/asm/user.png')} />
        } else {
          return <Image source={require('../../../assets/images/asm/user.png')} />
        }
      } else if (route.name == 'Notification') {
        if (focused) {
          return <Image source={require('../../../assets/images/asm/bell.png')} />
        } else {
          return <Image source={require('../../../assets/images/asm/bell.png')} />
        }
      } else if (route.name == 'Search') {
        if (focused) {
          return <Image source={require('../../../assets/images/asm/search.png')} />
        } else {
          return <Image source={require('../../../assets/images/asm/search.png')} />
        }
      } else {
        if (focused) {
          return <Image source={require('../../../assets/images/asm/bell.png')} />
        } else {
          return <Image source={require('../../../assets/images/asm/bell.png')} />
        }
      }
    },
  }
}

const Tab = createBottomTabNavigator()

const MainStackNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Notification' component={Notification} />
      <Tab.Screen name='Account' component={Account} />
    </Tab.Navigator>
  )
}




export default MainStackNavigation
