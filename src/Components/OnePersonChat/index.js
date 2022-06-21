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
import {IMAGE,FONTS} from '../Assets/index'
import IconEdit from '../Assets/images/SVG/IconCreate.svg'
import IconSearch from '../Assets/images/SVG/IconSearch.svg'
import IconClear from '../Assets/images/SVG/IconClear.svg'
export default class OnePersonChat extends Component{
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
            <Fragment>
                <SafeAreaView style={{flex:0,zIndex:1 }} />
                <SafeAreaView style={styles.background_mode}>
                    <View style={styles.backgroud_top}>
                        <View style={{flexDirection:'row',marginTop:20}}>
                           <View style={{flex:.7,flexDirection:'row'}}>
                               <View style={{flexDirection:'column',justifyContent:'center'}}>
                                    <Image source={IMAGE.girl1} style={styles.girl1}/>
                               </View>
                               <View style={{flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                                    <Text style={styles.txt_label_table_talking}>
                                        តារាងជជែក
                                    </Text>
                               </View>
                           </View>
                           <View style={{flex:.3,justifyContent:'center',alignItems:'flex-end'}}>
                               <TouchableOpacity>
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
        paddingLeft:20,
        paddingRight:20,
    },
    backgroud_top:{
        flexDirection:"column",
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        paddingBottom:0,
       
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
        width:'100%',
        padding:4,
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15
    },InputSearch:{
        width:'100%',
        padding:0,
        paddingLeft:15,
        fontSize:18,
        fontFamily:FONTS.khmernew,
        height:30
    }
})