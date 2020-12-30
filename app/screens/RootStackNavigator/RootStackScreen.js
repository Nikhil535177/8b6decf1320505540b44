/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Splash/SplashScreen';
import HomeScreen from '../Home/HomeScreen';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import AsteroidListScreen from '../AsteroidList/AsteroidList';
import AsteroidDataListScreen from '../AsteroidDataList/AsteroidDataList';
import AsteroidDetailScreen from '../AsteroidDetail/AsteroidDetail';


const RootStack = createStackNavigator();
const NewStack = createStackNavigator();

const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>                        
            <RootStack.Screen
            options={({ route, navigation }) => ({
                title: 'Splash Screen',
                headerTitleAlign: 'center',
                headerTintColor: 'black',
                headerStyle: {backgroundColor: COLOR_CONST.lightWhite},
                headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                route: { route },
                navigation: { navigation }
            })
            } 
            name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerTintColor: 'black',
                    headerStyle: {backgroundColor: COLOR_CONST.backgroundColor},
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="HomeScreen" 
                component={HomeScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Asteroid List',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="AsteroidListScreen" 
                component={AsteroidListScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Asteroid Data List',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: COLOR_CONST.blue},
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="AsteroidDataListScreen" 
                component={AsteroidDataListScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Asteroid Detail',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: COLOR_CONST.black},
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="AsteroidDetailScreen" 
                component={AsteroidDetailScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;