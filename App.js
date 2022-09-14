import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Button, Pressable, Alert } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './src/home';
import SettingsScreen from './src/setting';
import NotificationScreen from './src/notification';
import SearchScreen from './src/search';
import Feather from "react-native-vector-icons/Feather"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { HStack, NativeBaseProvider, VStack } from 'native-base';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Test1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test1!</Text>
    </View>
  );
}
function Test2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>test2!</Text>
    </View>
  );
}

function MessageIcon() {

  const NavigateToTest = () => {
    navigation.navigate('Test2')
  }
  return (
    <Feather name='message-circle' size={30} color="#000" />
  )
}
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Instagram'

      screenOptions={{

      }}>
      <Stack.Screen name="HomeScreen"
        component={HomeScreen}
        options={({ route, navigation }) => ({
          headerLeft: () => (
            <Text style={{ fontFamily: "Grandista", marginLeft: 10, color: "#000", fontSize: 20 }}>Instagram Clone</Text>
          ),
          headerRight: () => (

            <NativeBaseProvider>
              <HStack space={4} justifyContent='center' mt={2} mr="4">
                <TouchableOpacity onPress={() => Alert.alert("OKE MINT")}>
                  <MaterialCommunityIcons name='plus-box-outline' size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Test2')}>
                  <MaterialCommunityIcons name='heart-outline' size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Test2')}>
                  <MessageIcon />
                </TouchableOpacity>
              </HStack>
            </NativeBaseProvider>

          ),
          title: false,
          headerMode: "screen",

        })} />
    </Stack.Navigator >

  );
}

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
}
export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Tab.Navigator initialRouteName="Instagram"
        backBehavior='history'
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: "#555",
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: "Grandista",
            textAlign: 'center'
          },
          headerShown: false,
          title: false,

        }}>
        <Tab.Screen name='Home' component={MyStack} options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Instagram',
          tabBarLabelStyle: {
            fontFamily: "Grandista"
          },
          tabBarIcon: ({ color, size, }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),

        }} />
        <Tab.Screen name="Search" component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon name="search" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Reels" component={NotificationScreen}
          options={{
            tabBarLabel: 'Reels',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="movie-play" color={color} size={size} />
            )
          }} />
        <Tab.Screen name="Notification" component={NotificationScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={size} />
            ),
            tabBarBadge: 2,
          }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => {
            return (<Image
              style={{ width: 35, height: 30, borderRadius: 50, shadowColor: "#000", shadowRadius: 4, shadowOpacity: 0.5 }}
              source={require('./assets/image/profile1.jpg')} />);
          }
        }
        } />
      </Tab.Navigator >
    </NavigationContainer >
  );
}

