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
    ImageBackground
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import {IMAGE,FONTS,COLOR} from '../Assets/index'
import IconBack from '../Assets/images/SVG/IconBack.svg'
import IconChangePF from '../Assets/images/SVG/IconChangePF.svg'
import IconEditName from '../Assets/images/SVG/IconEditName.svg'
import IconStatus from '../Assets/images/SVG/IconStatus.svg'
import IconCellPhone from '../Assets/images/SVG/IconCellPhone.svg'
import navigationService from '../Service/navigationService'

export default class ScreenProfile extends Component{
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
        return(
          <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : 'null'}
               style={styles.container}
          >
               <Fragment>
                    <SafeAreaView style={{ flex:0,zIndex:1,backgroundColor:'white'}} />
                    <SafeAreaView style={styles.background_mode}>
                         <View style={{flex:1,flexDirection:'column',paddingLeft:20,paddingRight:20,paddingTop:20,}}>
                              <View style={{flexDirection:'row',flex:.4,backgroundColor:COLOR.background,justifyContent:'center',borderRadius:10}}>
                                   <Image source={IMAGE.logoPNG} style={{width:'100%',height:'100%'}} resizeMode="cover"/>
                                   <TouchableOpacity 
                                        onPress={()=>{navigationService.goBack()}}
                                        style={{position:'absolute',left:10,top:10,backgroundColor:'white',padding:5,borderRadius:20}}>
                                        <IconBack width={20} height={20}/>
                                   </TouchableOpacity>
                              </View>
                              <View style={{flexDirection:'row',flex:.1,backgroundColor:'white'}}>
                                   <View style={{marginTop:-40,flexDirection:'column',width:'100%'}}>
                                        <Image source={IMAGE.girl1} 
                                        style={{width:80,height:80,alignSelf:'center'}}
                                        />
                                        <TouchableOpacity style={{alignSelf:'flex-end',marginTop:-60,marginRight:30}}>
                                             <IconChangePF width={40} height={40}/>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                              <View style={{flexDirection:'column',flex:.5,}}>
                                   <View style={{flexDirection:'row',justifyContent:'center'}}>
                                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                                             <Text style={{fontFamily:FONTS.khmernew,fontSize:24}}>ប៊ៀន សុធារិទ្ធ</Text>
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                                             <TouchableOpacity style={{padding:10,marginTop:-5,marginLeft:5}}>
                                                  <IconEditName width={15} height={15}/> 
                                             </TouchableOpacity>
                                        </View>
                                   </View>
                                   <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20}}>
                                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                                             <Text style={{fontFamily:FONTS.khmernew,fontSize:14,textAlign:'center',color:COLOR.gray}}>@BIENSOTHEARITH</Text>
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center',padding:10}}/>
                                   </View>
                                   <View style={{flexDirection:'row',borderTopWidth:1,borderTopColor:COLOR.gray,paddingTop:10,paddingBottom:10}}>
                                        <View style={{flexDirection:'column',justifyContent:'center',marginTop:-5}}>
                                            <IconStatus width={15} height={15} />
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center',flex:1}}>
                                             <Text style={{fontFamily:FONTS.khmernew,fontSize:18,marginLeft:10}}>Status</Text>
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'flex-end'}}>
                                             <Text style={{fontFamily:FONTS.khmernew,fontSize:18,color:COLOR.gray}}>Online</Text>
                                        </View>
                                   </View>
                                   <View style={{flexDirection:'row',borderTopWidth:1,borderTopColor:COLOR.gray,paddingTop:10,paddingBottom:10}}>
                                        <View style={{flexDirection:'column',justifyContent:'center',marginTop:-5}}>
                                            <IconCellPhone width={15} height={15} />
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center',flex:1}}>
                                             <Text style={{fontFamily:FONTS.khmernew,fontSize:18,marginLeft:10}}>070594606</Text>
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'flex-end'}}>
                                             <TouchableOpacity style={{padding:10,marginTop:-5,marginLeft:5}}>
                                                  <IconEditName width={15} height={15}/> 
                                             </TouchableOpacity>
                                        </View>
                                   </View>
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
    
})