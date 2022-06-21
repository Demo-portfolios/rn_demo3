/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Login from './src/Screens/ScreenLogin'
 import {Provider } from 'react-redux'
 import store from './src/Store/index'
 import Navigation from './src/Navigation/index'
 import NavigationService from './src/Service/navigationService'
//  import {openSettings} from 'react-native-permissions';
 import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
export default class App extends Component{
  componentDidMount(){
      requestMultiple([PERMISSIONS.IOS.CONTACTS,PERMISSIONS.ANDROID.READ_CONTACTS]).then((statuses) => {
    });
  }
  render(){
    return(
      <Provider store={store}>
        <View style={{flex:1}}>
          <Navigation
           ref={
            navigatorRef =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
          />
        </View>
      </Provider>
      
      
    );
  }
}

