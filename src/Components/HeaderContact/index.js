import React,{Component} from 'react'
import {
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    View, 
    Image,
    Platform
} from 'react-native'
import {COLOR,FONTS,ICON,IMAGE} from '../../Assets/index'
import IconBack from '../../Assets/images/SVG/IconBack.svg'
import IconGroup from '../../Assets/images/SVG/IconGroup.svg'
import IconVideoCall from '../../Assets/images/SVG/IconVideoCall.svg'
import navigationService from '../../Service/navigationService'
import { NAV_TYPES } from '../../Navigation/navTypes'

export default class HeaderContact extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
        
    }
   

   componentDidMount(){
       
   }
   UNSAFE_componentWillReceiveProps(nextProps){
    
   }
    render(){
        const { 
               fun_back 
            } =this.props;
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.type_none_big}>
                         <View style={{flexDirection:'column',justifyContent:'center'}}>
                              <TouchableOpacity 
                                   onPress={fun_back}
                                   style={{justifyContent:'center',marginRight:10}}>
                                   <IconBack width={20} height={20}/>
                              </TouchableOpacity>
                         </View>
                         <View style={{flexDirection:'column',justifyContent:'center',padding:0}}>
                              <Text style={styles.txt_back}>
                                   តារាងជជែកថ្មី
                              </Text>
                         </View>
                    </View>
                         <View style={styles.type_none}>
                         <View style={{flexDirection:'column',justifyContent:"center"}}>
                              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigationService.navigate(NAV_TYPES.CREATEGROUP)}>
                                   <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <IconGroup width={40} height={40}/>
                                   </View>
                                   <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={[styles.txt_back,{marginLeft:10}]}>បង្កើតក្រុម</Text>
                                   </View>
                              </TouchableOpacity>
                         </View>
                         </View>
                </View>
            </>
           
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "row", 
        padding: 0,
    },
    container_:{
        flex: 1,
        width: "100%",
        flexDirection: "row", 
        justifyContent:'space-between',
    },
    type_none_big:{
        justifyContent:'flex-start',
        flexDirection:'row',
        flex:1
    },
    type_none:{
          justifyContent:'center',
          flexDirection:'row',
    },
    type_none_chat:{
        justifyContent:'center',
        flexDirection:'row',
        width:'10%',
    },
    type_none_:{
        paddingLeft:10,
        justifyContent:'center',
        width:'80%'
    },
    imageProfile:{
         width:50,
         height:50,
         borderRadius:15
    },
    txt_back:{
         lineHeight:Platform.OS==='ios'?28:35,
         fontSize:18,
         fontFamily:FONTS.khmernew,
         color:COLOR.background
    }
    
  });