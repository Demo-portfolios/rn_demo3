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
    PlatformColor
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import {IMAGE,FONTS,COLOR} from '../Assets/index'
import IconAdd from '../Assets/images/SVG/IconAdd.svg'
import IconWrite from '../Assets/images/SVG/IconWrite.svg'
import IconLogo from '../Assets/images/SVG/logo.svg'
import HeaderChat from '../Components/HeaderChat'
import ChatOwner from '../Components/ChatOwner'
import ChatPartner from '../Components/ChatPartner'
export default class ScreenChatPerson extends Component{
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
   _loopChat(data){
     var rs=[];
     if(data.length>0){
          data.map((one,i)=>{
               rs.push(
                    one['type']==='owner'?
                    <ChatOwner
                         key={i}
                         i={i}
                         item={one}
                    />:
                    <ChatPartner
                         key={i}
                         i={i}
                         item={one}
                    />
               )
          })
     }return rs
     }
     _option(){
          return(
                  <View style={{position:'absolute',top:-60,right:0,width:'30%'}}>
                  {
                      this.state.madieFocus?
                      <Animatable.View 
                          animation="fadeInUp" 
                          style={{flexDirection:'row'}}
                      >
                          <View style={{flexDirection:"column",width:"50%",alignItems:'center',justifyContent:'center'}}>
                              <TouchableOpacity 
                                 
                                  onPress={()=>alert('e')}
                                  style={{
                                  padding:10,
                                  borderRadius:100,
                                  backgroundColor:COLORS.type2,
                                  }}>
                                  <ICON.MaterialIcons name="image" size={30}/>
                              </TouchableOpacity>
                          </View>
                          <View style={{flexDirection:"column",width:"50%",alignItems:'center',justifyContent:'center'}}>
                          <TouchableOpacity 
                              onPress={()=>{alert('hello')}}
                              style={{
                              padding:10,
                              backgroundColor:COLORS.type2,
                              borderRadius:100,

                              }}>
                              <ICON.MaterialIcons name="camera-alt" size={30}/>
                          </TouchableOpacity>
                          </View>
                      </Animatable.View>
                      :
                      null
                  }
              </View>
          )
      }
    render(){
        const dataChat=[
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទasdasdasjdhaskjdhaskjdhaskjdhasjkhdaskjhdasjkhdasjkhdkasjhdaskjhdsakjhdsakjhdaskj',countMessageNoSeen:7,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'partner',lastMessage:'អត្ថបទ',countMessageNoSeen:9,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទasdasdasjdhaskjdhaskjdhaskjdhasjkhdaskjhdasjkhdasjkhdkasjhdaskjhdsakjhdsakjhdaskj',countMessageNoSeen:7,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'partner',lastMessage:'អត្ថបទ',countMessageNoSeen:9,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទasdasdasjdhaskjdhaskjdhaskjdhasjkhdaskjhdasjkhdasjkhdkasjhdaskjhdsakjhdsakjhdaskj',countMessageNoSeen:7,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'partner',lastMessage:'អត្ថបទ',countMessageNoSeen:9,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'},
            {name:'រិទ្ធ',type:'owner',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'}
        ]
        return(
          <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : 'null'}
               style={styles.container}
          >
               <Fragment>
                    <SafeAreaView style={{ flex:0,zIndex:1,backgroundColor:'white'}} />
                    <SafeAreaView style={styles.background_mode}>
                         <View style={styles.backgroud_top}>
                              <HeaderChat
                                   fun_back={()=>NavigationService.goBack()}
                              />
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
                                {
                                    this._loopChat(dataChat)
                                }
                                </View>
                         </ScrollView>
                         <View style={[{
                                   padding:5,
                                   height:Platform.OS==='ios'?70:50,
                                   flexDirection:'row',
                                   justifyContent:'space-between',
                                   backgroundColor:'#eeeeee',
                                   position:'absolute',
                                   bottom:0}]
                              }>
                              <View style={{flexDirection:'column',justifyContent:'center',width:'33.33%'}}>
                                   <TouchableOpacity style={{alignItems:'center',width:'100%'}}>
                                        <IconWrite width={20} height={20}/>
                                   </TouchableOpacity>
                              </View>
                              <View style={{flexDirection:'column',justifyContent:'center',width:'33.33%'}}>
                                   <TouchableOpacity style={{alignItems:'center',width:'100%',marginTop:-30,zIndex:10000}}>
                                        <IconLogo width={100} height={60}/>
                                        <Text style={{fontSize:16,fontFamily:FONTS.khmernew,color:COLOR.gray}}>ចុចជាប់ និយាយ</Text>
                                   </TouchableOpacity>
                              </View>
                              <View style={{flexDirection:'column',justifyContent:'center',width:'33.33%'}}>
                                   <TouchableOpacity style={{alignItems:'center',width:'100%'}}>
                                        <IconAdd width={20} height={20}/>
                                   </TouchableOpacity>
                              </View>
                         </View>
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