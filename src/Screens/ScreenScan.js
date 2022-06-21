import React,{Component,Fragment} from 'react'
import {
    Text, 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView,
    View,
    Platform,
    Image,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    PlatformColor,
    Alert
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import {IMAGE,FONTS,COLOR} from '../Assets/index'

export default class ScreenScan extends Component{
    constructor(prop){
        super(prop)
        this.state={
           text_search:''
        }
        
    }
   

   componentDidMount(){
    Alert.alert('Version Demo!');
   }
   UNSAFE_componentWillReceiveProps(nextProps){
    
   }
   
    render(){
        return(
          <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : 'null'}
               style={styles.container}
          >
               <Fragment>
                    <SafeAreaView style={{ flex:0,zIndex:1,backgroundColor:'white'}} />
                    <SafeAreaView style={styles.background_mode}>
                        <Text>
                             NewFeed
                        </Text>
                    </SafeAreaView>
               </Fragment>
          </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
     container: {
          flex: 1
        },
    background_mode:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
    },
    backgroud_top:{
          marginTop:25,
          height:50,
          flexDirection:"column",
          borderBottomWidth:1,
          borderBottomColor:COLOR.gray,
          marginLeft:20,
          marginRight:20,
          paddingBottom:30
    }
})