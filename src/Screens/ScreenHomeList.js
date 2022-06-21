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
    ScrollView
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import {IMAGE,FONTS,COLOR} from '../Assets/index'
import IconEdit from '../Assets/images/SVG/IconCreate.svg'
import IconSearch from '../Assets/images/SVG/IconSearch.svg'
import IconClear from '../Assets/images/SVG/IconClear.svg'
import IconMute from '../Assets/images/SVG/IconMute.svg'
import navigationService from '../Service/navigationService'
export default class Home extends Component{
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
                <TouchableOpacity 
                style={styles.oneUser}
                key={i} 
                onPress={()=>{navigationService.navigate(NAV_TYPES.CHATPERSON)}}
                >
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <Image source={IMAGE.girl2} style={styles.imageUser}/>
                    </View>
                    <View style={[styles.viewOnePerson,i!=data.length-1?{ borderBottomWidth:1}:{borderBottomWidth:0}]}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',flex:1,justifyContent:'center'}}>
                               <Text style={styles.lableNameUser}>
                                    {one['name']}
                               </Text>
                            </View>
                            {
                                !one['mute']?
                                <View style={{flexDirection:'column',justifyContent:'center'}}>
                                    <Text style={styles.lableTime}>
                                            {one['time']}
                                    </Text>
                                </View>:
                                <View style={{flexDirection:'column',justifyContent:'center',marginTop:15}}>
                                    <IconMute width={15} height={15}/>
                                </View>
                            }
                            
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',flex:1,justifyContent:'center'}}>
                               <Text style={styles.lableLastMessage}>
                                    {one['lastMessage']}
                               </Text>
                            </View>
                           {
                               !one['mute']?
                                <View style={[{alignItems:'center',
                                    flexDirection:'column',
                                    borderRadius:100,
                                    justifyContent:'center'},
                                    one['countMessageNoSeen']<10?
                                    {padding:0,width:15,height:15,backgroundColor:COLOR.gray,}:null
                                ]}
                                    >
                                    {
                                        one['countMessageNoSeen']<10?
                                        <Text style={[styles.lableCountNoSeen,{marginLeft:0,textAlign:'center',lineHeight:Platform.OS==='ios'?21:25}]}>
                                            {one['countMessageNoSeen']}
                                        </Text>:
                                        <Text>...</Text>
                                    }
                                </View>:null
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }return rs
}
    render(){
        const dataChat=[
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:7,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:9,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'}
        ]
        return(
            <Fragment>
                <SafeAreaView style={{flex:0,zIndex:1,backgroundColor:'white' }} />
                <SafeAreaView style={styles.background_mode}>
                    <View style={styles.backgroud_top}>
                        <View style={{flexDirection:'row',marginTop:20}}>
                           <View style={{flex:.7,flexDirection:'row'}}>
                               <View style={{flexDirection:'column',justifyContent:'center'}}>
                               <TouchableOpacity
                                    onPress={()=>NavigationService.navigate(NAV_TYPES.PROFILE)}
                                >
                                    <Image source={IMAGE.girl1} style={styles.girl1}/>
                                </TouchableOpacity>
                               </View>
                               <View style={{flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                                    <Text style={styles.txt_label_table_talking}>
                                        តារាងជជែក
                                    </Text>
                               </View>
                               
                           </View>
                           <View style={{flex:.3,justifyContent:'center',alignItems:'flex-end'}}>
                               <TouchableOpacity onPress={()=>{navigationService.navigate(NAV_TYPES.CONTACT)}}>
                                    <IconEdit width={45} height={45}/>
                               </TouchableOpacity>
                           </View>
                        </View>
                    </View>
                    <ScrollView 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop:Platform.OS==='ios'?20:15,
                        flex:.9,
                        backgroundColor:'white',
                        }}>
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
                        <View style={{paddingBottom:60,marginRight:20,marginLeft:20}}>
                            {
                                this._loopChat(dataChat)
                            }
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        )
    }
}
const styles = StyleSheet.create({
    background_mode:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
    },
    backgroud_top:{
        flexDirection:"column",
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        paddingBottom:0,
        marginRight:20,
        marginLeft:20,
    },girl1:{
        width:50,
        height:50
    },txt_label_table_talking:{
        fontFamily:FONTS.khmernew,
        fontSize:20
    },
    search:{
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
    oneUser:{
        flexDirection:'row',
        alignItems:"center",
        paddingTop:5,
    },imageUser:{
        width:55,
        height:55,
        borderRadius:5,
        margin:0
    },viewOnePerson:{
        flexDirection:'column',
        justifyContent:'center',
        flex:1,
        marginLeft:10,
        paddingBottom:10,
        borderColor:COLOR.gray
    },lableNameUser:{
        fontFamily:FONTS.khmernew,
        fontSize:20,
        marginLeft:2,
        padding:0,
        color:COLOR.gray,
        fontWeight:'600'
    },lableLastMessage:{
        fontFamily:FONTS.khmernew,
        fontSize:14,
        marginLeft:2,
        padding:0,
        marginTop:-5,
        color:COLOR.gray,
        fontWeight:'600'
    },lableTime:{
        fontFamily:FONTS.khmernew,
        fontSize:14,
        marginLeft:2,
        padding:0,
        color:COLOR.gray,
        fontWeight:'600'

    },lableCountNoSeen:{
        fontFamily:FONTS.khmernew,
        fontSize:14,
        marginLeft:2,
        padding:0,
        textAlign:'center',
        alignSelf:'center',
        color:'white'
    }
})