import { createAppContainer, createDrawerNavigator, createStackNavigator, HeaderBackButton } from 'react-navigation'
import React, { Components } from 'react'

import Home from '../../screens/Home/Home'
import Login from '../../screens/Login/Login'
import Register from '../../screens/Register/Register'
import LeaderBoards from '../../screens/LeaderBoards/LeaderBoards'
import Main from '../../screens/Main/Main'
import SideBar from '../../components/SideBar';
import Avatar from '../../components/Avatar';
import IconLeaderBoards from '../../components/IconLeaderBoards';

const StackNavigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerLeft: (<Avatar />),
            headerRight: (<IconLeaderBoards />),
        }
    },
    Login,
    Register,
    Main,
    LeaderBoards
})

const MainNavigation = createDrawerNavigator({
    StackNavigation
}, {
        contentComponent: SideBar,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        },
    })

export default createAppContainer(MainNavigation)