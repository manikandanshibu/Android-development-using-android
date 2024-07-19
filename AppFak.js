import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Searchbar } from 'react-native-paper';
import AboutUs from './src/navigators/Drawer/AboutUs';
import Help from './src/navigators/Drawer/Help';
import LogOut from './src/navigators/Drawer/LogOut';
import User from './src/navigators/Drawer/User';
import Call from './src/navigators/Tab/Call';
import Chat from './src/navigators/Tab/Chat';
import Status from './src/navigators/Tab/Status';
import Home from './src/navigators/BottomTab/Home';
import Account from './src/navigators/BottomTab/Account';
import Settings from './src/navigators/BottomTab/Settings';
import DrawerContent from './src/navigators/Drawer/DrawerContent';
import Login from './src/navigators/Stack/Login';
import Numlogin from './src/navigators/Stack/Numlogin';
import Otp from './src/navigators/Stack/Otp';
import Tour from './src/navigators/Stack/Tour';
import Tour2 from './src/navigators/Stack/Tour2';
import Tour3 from './src/navigators/Stack/Tour3';
import Tour4 from './src/navigators/Stack/Tour4';
import Scholboa from './src/navigators/Stack/Scholbo';
import Studet from './src/navigators/Stack/Studet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import NewTab from './src/navigators/Tab/NewTab';
import Physics from './src/navigators/BottomTab/Physics';
import Therm from './src/navigators/BottomTab/Therm';
import Profile from './src/navigators/BottomTab/Profile';
const Stack= createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab= createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator(); 

function StackNav(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
            <Stack.Screen
            name='Numlogin'
            component={Numlogin}
           
         />
          <Stack.Screen
            name="Otp"
            component={Otp}
        />
        <Stack.Screen
            name="Studet"
            component={Studet}
        />
        <Stack.Screen
            name="Scholbo"
            component={Scholboa}
        />
        <Stack.Screen
            name="Tour"
            component={Tour}
        />
         <Stack.Screen
            name="Tour2"
            component={Tour2}
        />
        <Stack.Screen
            name="Tour3"
            component={Tour3}
        />
        <Stack.Screen
            name="Tour4"
            component={Tour4}
        />
         <Stack.Screen
            name="Physics"
            component={Physics}
        />
        <Stack.Screen
            name="Therm"
            component={Therm}
        />
         <Stack.Screen
            name="Profile"
            component={Profile}
        />
     
      <Stack.Screen name='DrawerNav' component={DrawerNav}/>
      <Stack.Screen name='TabNav' component={TabNav}/>
      <Stack.Screen name='BottomTabNav' component={BottomTabNav}/>
    </Stack.Navigator>
  )
  

  
}

function DrawerNav() {
  return(
    
       <Drawer.Navigator
       drawerContent={(props)=><DrawerContent{...props}/>}>
    
         <Drawer.Screen 
        name='Learning HuB' 
        component={BottomTabNav} 
        Options={{
          drawerStyle: {
            backgroundColor: 'black',
            drawerActiveTintColor:'green'
          },
        }}

        
        />

         <Drawer.Screen 
        name='Wallet Balence' 
        component={BottomTabNav} 
        
        />
        
        <Drawer.Screen 
        name='Records' 
        component={BottomTabNav} 
        
        />
        <Drawer.Screen
         name='Refund and Policies' 
         component={TabNav}
        
         />
        <Drawer.Screen
         name='Settings' 
         component={TabNav} 
         
         />
          <Drawer.Screen 
        name='About us' 
        component={BottomTabNav} 
        
        />
        <Drawer.Screen 
        name='LogOut' 
        component={TabNav} 
       
        />
       </Drawer.Navigator>
  )
}

const TabNav=() =>{
  return(
    <View style={{flex:1}}>
    
    <NewTab/>
     
    <Tab.Navigator>
    <Tab.Screen 
      name='Home'
      // component={BottomTabNav}
      component={Status}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'blue',
        tabBarIcon:({focused}) =>
        focused ? <Icon1 name='home' size={24}  color='blue'/> :<Icon1 name='home-outline' size={24} color='grey'/>
        // tabBarStyle:{backgroundColor:'green'},
        // tabBarIcon:({focused}) =>
        //   focused ? <Icon1 name='chatbubbles' size={24}  color='blue'/> :<Icon1 name='chatbubbles-outline' size={24} color='green'/>  
      }}
      
      />
      <Tab.Screen 
      name='Recent'
      component={Status}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'blue',
        tabBarIcon:({focused}) =>
          focused ? <Icon1 name='play-circle' size={24}  color='blue'/> :<Icon1 name='play-circle-outline' size={24} color='grey'/>
        // tabBarStyle:{backgroundColor:'green'},
        // tabBarIcon:({focused}) =>
        //   focused ? <Icon1 name='chatbubbles' size={24}  color='blue'/> :<Icon1 name='chatbubbles-outline' size={24} color='green'/>  
      }}
      
      />
      <Tab.Screen 
      name='Exam' 
      component={Status}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'blue',
        
        tabBarIcon:({focused}) =>
          focused ? <Icon name='pen' size={24}  color='black'/> :<Icon name='pen' size={24} color='grey'/>
      }}
      
      />
      
      <Tab.Screen 
      name='Profile' 
      component={Profile}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'blue',
        tabBarIcon:({focused}) =>
          focused ? <Icon1 name='person' size={24}  color='blue'/> :<Icon1 name='person' size={24} color='grey'/>
      }}
      />
      <Tab.Screen 
      name='Contact' 
      component={Status}
      options={{headerShown:false,
        tabBarLabelStyle:{ fontSize:13},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'blue',
        tabBarIcon:({focused}) =>
          focused ? <Icon1 name='mail' size={24}  color='blue'/> :<Icon1 name='mail' size={24} color='grey'/>
      }}
      />

    </Tab.Navigator>
    </View>
  )
}
function BottomTabNav(){
  return(
    
    <BottomTab.Navigator
   >
   
    <BottomTab.Screen 
    name='Home' 
    component={Home}
    options={{headerShown:false,
      
      tabBarLabelStyle:{ fontSize:14},
      tabBarIcon:({focused}) =>
        focused ? <Icon1 name='home' size={24}  color='blue'/> :<Icon1 name='home-outline' size={24} color='grey'/>
      
    }}
    />
    <BottomTab.Screen 
    name='Recent' 
    component={Home}
    options={{headerShown:false,
      tabBarLabelStyle:{ fontSize:13},
      tabBarIcon:({focused}) =>
        focused ? <Icon1 name='play-circle' size={24}  color='blue'/> :<Icon1 name='play-circle-outline' size={24} color='grey'/>
      
    }}
    />
    <BottomTab.Screen 
    name='Exam' 
    component={Home}
    options={{headerShown:false,
      tabBarLabelStyle:{ fontSize:13},
      tabBarIcon:({focused}) =>
        focused ? <Icon name='pen' size={24}  color='blue'/> :<Icon name='pen' size={24} color='grey'/>
      
    }}
    />
    <BottomTab.Screen 
    name='Profile' 
    component={Profile}
    options={{headerShown:false,
      tabBarIcon:({focused}) =>
      focused ? <Icon name='account-circle' size={24} color='blue'/> : <Icon name='account-circle-outline' size={24} color='grey'/>
    }}
    />
    <BottomTab.Screen 
    name='Contact' 
    component={Settings}
    options={{headerShown:false,
    tabBarLabelStyle:{ fontSize:13},
      tabBarIcon:({focused}) =>
        focused ? <Icon1 name='mail' size={24}  color='blue'/> :<Icon1 name='mail' size={24} color='grey'/>
    }}
    />
  
  </BottomTab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
    <StackNav/>
    </NavigationContainer>
  )
}

export default App