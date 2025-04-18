import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IonIcons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreens from '../screens/DetailsScreens'
import LoginScreen from '../screens/LoginScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color, size }) => <IonIcons name="home-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
      name="Profiel"
      component={ProfileScreen}
      options ={{ tabBarIcon: ({ color, size }) => <IonIcons name="person-outline" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreens} />
    </Stack.Navigator>
  )
}

export default AppNavigation