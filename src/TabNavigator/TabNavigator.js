// TabNavigator
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileClosetScreen } from '../Screens/ProfileClosetScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { LikeScreen } from '../Screens/LikeScreen';
import { UploadScreen } from '../Screens/UploadScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={ProfileClosetScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, }) => (
                        <MaterialCommunityIcons name="hanger" color={color} size={size}  />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={UploadScreen}
                options={{
                    tabBarLabel: 'Plus',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="cloud-up" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={LikeScreen}
                options={{
                    tabBarLabel: 'Like',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-o" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="User"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <AntIcon name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function TabNavigator() {
    return (
        
            <MyTabs />
        
    );
}




