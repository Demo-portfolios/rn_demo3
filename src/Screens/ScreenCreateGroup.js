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
    KeyboardAvoidingView
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import {IMAGE,FONTS,COLOR} from '../Assets/index'
import IconAdd from '../Assets/images/SVG/IconAdd.svg'
import IconSearch from '../Assets/images/SVG/IconSearch.svg'
import IconClear from '../Assets/images/SVG/IconClear.svg'
import IconMute from '../Assets/images/SVG/IconMute.svg'
import IconWrite from '../Assets/images/SVG/IconWrite.svg'
import IconLogo from '../Assets/images/SVG/logo.svg'
import navigationService from '../Service/navigationService'
import HeaderContact from '../Components/HeaderContact'
export default class ScreenCreateGroup extends Component{
    constructor(prop){
        super(prop)
        this.state={
           text_search:''
        }
        
    }
   

   componentDidMount(){
       
   }
   UNSAFE_componentWillReceiveProps(nextProps){
    
   }
   
    render(){
        const dataChat=[
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:7,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:9,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'}
        ]
        return(
          <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : 'null'}
          style={styles.container}
          >
              <Text>Create Group</Text>
               {/* <Fragment>
                    <SafeAreaView style={{ flex:0,zIndex:1,backgroundColor:'white'}} />
                    <SafeAreaView style={styles.background_mode}>
                         <View style={styles.backgroud_top}>
                              <HeaderContact
                                   fun_back={()=>NavigationService.goBack()}
                                   profile={false}
                              />
                         </View>
                         <View style={styles.search}>
                            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <IconSearch width={25} height={25}/>
                            </View>
                            <View style={{flexDirection:'column',flex:1}}>
                                <TextInput 
                                placeholder={'ស្វែករក'}
                                placeholderTextColor="gray"
                                onChangeText={(text)=>{this.setState({text_search:text})}}
                                value={this.state.text_search}
                                style={styles.InputSearch}/>
                            </View>
                            {
                                this.state.text_search?
                                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.setState({text_search:''})}} >
                                        <IconClear width={30} height={30}/>
                                    </TouchableOpacity>
                                </View>:null
                            }
                         </View>
                         <ScrollView 
                              ref="scrollView"
                              style={{
                                   flex:1,
                                   backgroundColor:'white',
                                   paddingBottom:100,
                                   paddingRight:20,
                                   paddingLeft:20
                         }}>
                              <View style={{paddingBottom:100}}>
                              <Text>A</Text>
                              </View>
                         </ScrollView>
                    </SafeAreaView>
               </Fragment> */}
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
          marginLeft:20,
          marginRight:20,
          paddingBottom:30
    },
    container: {
     flex: 1,
     width: "100%",
     flexDirection: "row", 
     padding: 0,
     },search:{
          flexDirection:'row',
          backgroundColor:'#f1f2f2',
          padding:4,
          borderRadius:5,
          paddingLeft:15,
          paddingRight:15,
          marginRight:20,
          marginLeft:20
      },InputSearch:{
          width:'100%',
          padding:0,
          paddingLeft:15,
          fontSize:18,
          fontFamily:FONTS.khmernew,
          height:30
      },
})