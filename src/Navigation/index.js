import React from 'react'
import {View,Image,StyleSheet,Text,Platform,TouchableOpacity} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {NAV_TYPES} from './navTypes'
import screenLogin from '../Containers/LoginContainer'
import ScreenHomeList from '../Containers/ScreenHomeList'
import ScreenChatPerson from '../Containers/ScreenChatPerson'
import ScreenProfile from '../Containers/ScreenProfile'
import ScreenNewFeed from '../Containers/ScreenNewFeed'
import ScreenScan from '../Containers/ScreenScan'
import ScreenContact from '../Containers/ScreenContact'
import ScreenCreateGroup from '../Containers/ScreenCreateGroup'
import {COLOR} from '../Assets'
import IconHomeChat from '../Assets/images/SVG/IconHomeChat.svg'
import IconHomeChatActive from '../Assets/images/SVG/IconHomeChatActive.svg'
import IconScanActive from '../Assets/images/SVG/IconScanActive.svg';
import IconScan from '../Assets/images/SVG/IconScan.svg';
import IconNewFeed from '../Assets/images/SVG/IconNewFeed.svg';
import IconNewFeedActive from '../Assets/images/SVG/IconNewFeedActive.svg';
const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]:{
            screen:screenLogin,
            navigationOptions:{
                headerShown:false
            },
        },
  
    },
    {
        initialRouteName:NAV_TYPES.LOGIN
    });

const ScreenChatPerson_ = createStackNavigator(
        {
            [NAV_TYPES.CHATPERSON]:{
                screen:ScreenChatPerson,
                navigationOptions:{
                    headerShown:false
                }
            },
        },
        {
            initialRouteName:NAV_TYPES.CHAT
        });
const ScreenProfile_ = createStackNavigator(
    {
        [NAV_TYPES.PROFILE]:{
            screen:ScreenProfile,
            navigationOptions:{
                headerShown:false
            }
        },
    },
    {
        initialRouteName:NAV_TYPES.PROFILE
    });
const ScreenContact_ = createStackNavigator(
        {
            [NAV_TYPES.CONTACT]:{
                screen:ScreenContact,
                navigationOptions:{
                    headerShown:false
                }
            },
        },
        {
            initialRouteName:NAV_TYPES.CONTACT
        });  
const ScreenCreateGroup_ = createStackNavigator(
            {
                [NAV_TYPES.CREATEGROUP]:{
                    screen:ScreenCreateGroup,
                    navigationOptions:{
                        headerShown:false
                    }
                },
            },
            {
                initialRouteName:NAV_TYPES.CREATEGROUP
            });  
const HomeNavigation = createStackNavigator(
    {
        [NAV_TYPES.HOMELIST]:{
            screen:ScreenHomeList,
            navigationOptions:{
                headerShown:false
            }
        },
       
    },
    {
        initialRouteName:NAV_TYPES.HOMELIST
    }
)


//Tab Navigation
const TabNavigation = createBottomTabNavigator(
    {
        [NAV_TYPES.HOMELIST]:{
            screen:HomeNavigation,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Text style={{textAlign:'center',color:!focused?COLOR.gray:COLOR.background}}>ជជែក</Text>
                ),
                tabBarIcon:({focused})=>(
                    !focused?
                    <IconHomeChat width={25} height={25}/>:
                    <IconHomeChatActive width={25} height={25}/>
                ),
            }
        },
        [NAV_TYPES.SCAN]:{
            screen:ScreenScan,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Text style={{textAlign:'center',color:!focused?COLOR.gray:COLOR.background}}>ស្កែន</Text>
                ),
                tabBarIcon:({focused})=>(
                    !focused?
                    <IconScan width={25} height={25}/>:
                    <IconScanActive width={25} height={25}/>
                ),
            }
        },
        [NAV_TYPES.NEWFEED]:{
            screen:ScreenNewFeed,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Text style={{textAlign:'center',color:!focused?COLOR.gray:COLOR.background}}>New Feed</Text>
                ),
                tabBarIcon:({focused})=>(
                    !focused?
                    <IconNewFeed width={25} height={25}/>:
                    <IconNewFeedActive width={25} height={25}/>
                ),
            }
        },
    },
    {
        tabBarOptions: {
          showIcon: true,
          showLabel:true,
        //   activeBackgroundColor:'#f5f5f5',
        
          labelStyle: {
            fontSize: 20,
          },
          style:{
              height:65,
              backgroundColor:'#eeeeee'
            },
        
        },
    }
)


const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN]:{
            screen:TabNavigation,
            navigationOptions: {
                headerShown:false
              }
        },
        [NAV_TYPES.CHATPERSON]:{
            screen:ScreenChatPerson_,
            navigationOptions: {
                headerShown:false
              }
        },
        [NAV_TYPES.PROFILE]:{
            screen:ScreenProfile_,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.NEWFEED]:{
            screen:ScreenNewFeed,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.SCAN]:{
            screen:ScreenScan,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.CONTACT]:{
            screen:ScreenContact_,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.CREATEGROUP]:{
            screen:ScreenCreateGroup_,
            navigationOptions:{
                headerShown:false
            }
        },
    },
    {
        initialRouteName:NAV_TYPES.MAIN
    }
)



ScreenChatPerson_.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
      if (navigation.state.index > -1) {
         tabBarVisible = false;
      }
      return {
         tabBarVisible
      };
  };
  ScreenProfile_.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
      if (navigation.state.index > -1) {
         tabBarVisible = false;
      }
      return {
         tabBarVisible
      };
  };
  ScreenContact_.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
      if (navigation.state.index > -1) {
         tabBarVisible = false;
      }
      return {
         tabBarVisible
      };
  };
  ScreenCreateGroup_.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
      if (navigation.state.index > -1) {
         tabBarVisible = false;
      }
      return {
         tabBarVisible
      };
  };
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]:{
            screen:IntroNavigator,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.CORE]:{
            screen:CoreNavigation,
            navigationOptions:{
                headerShown:false
            }
        }
    },
    {
        initialRouteName:NAV_TYPES.INTRO
    }
)
export default createAppContainer(MainNavigation)