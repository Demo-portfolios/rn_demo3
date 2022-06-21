import React,{Component} from 'react'
import {
    Text, 
    Image,
    StyleSheet, 
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    View,
    TextInput,
    Platform,
} from 'react-native'
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
import {IMAGE,ICON,COLOR,FONTS} from '../Assets/index'
import IconPhone from '../Assets/images/SVG/iconPhone.svg'
import {
    CodeField,
    Cursor,
  } from 'react-native-confirmation-code-field';
export default class Login extends Component{
    constructor(prop){
        super(prop)
        this.state={
            txt_code:'',
            txt_name:'',

            register:false,
            newMember:false,
            
            //label
            label_title:'សូមបញ្ចូលលេខទូរស័ព្ទ'
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        
    }
    
    render(){
        const CELL_COUNT = 6;
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" :null}
            style={styles.container}>
               <ImageBackground 
                    source={IMAGE.backgroundPNG}
                    style={styles.backgroundPNG}>
                    <View style={{flex:0.4,justifyContent:'flex-end',alignItems:'center'}} >
                        <Image source={IMAGE.logoPNG} style={styles.logo}/>
                    </View>
                    <View style={{flex:0.6,justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={styles.text_h1}>
                            {
                                this.state.label_title
                            }
                        </Text>
                        {
                            this.state.newMember?
                            <Text style={styles.styles_lable}>យើងរួមគ្នាអភិរក្សអក្សរសាស្រ្តខ្មែរ</Text>
                            :null
                        }
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            {
                                !this.state.register?
                                <View  style={{flex:1,flexDirection:'row',marginTop:20}}>
                                    <View style={{flex:.2,flexDirection:'column'}}/>
                                    <View style={{flex:.6,flexDirection:'column'}}>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flexDirection:'column'}}>
                                                <IconPhone width={35} height={35}/>
                                            </View>
                                            <View style={{flexDirection:"column",flex:1}}>
                                                <TextInput 
                                                    keyboardType='number-pad'
                                                    placeholder="+855"
                                                    placeholderTextColor='gray'
                                                    style={styles.textInput_Phone}/>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flex:.2,flexDirection:'column'}}/>
                                </View>
                                :!this.state.newMember?
                                <View  style={{flex:1,flexDirection:'row',marginTop:20}}>
                                    <View style={{flex:.15,flexDirection:'column'}}/>
                                    <View style={{flex:.7,flexDirection:'column'}}>
                                    <CodeField
                                            caretHidden={false}
                                            value={this.state.txt_code}
                                            onChangeText={(text)=>this.setState({txt_code:text})}
                                            cellCount={CELL_COUNT}
                                            rootStyle={styles.codeFieldRoot}
                                            keyboardType="number-pad"
                                            textContentType="oneTimeCode"
                                            renderCell={({index, symbol, isFocused}) => (
                                            <Text
                                                key={index}
                                                style={[styles.cell, isFocused && styles.focusCell]}
                                                >
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                            )}
                                        />
                                    </View>
                                    <View style={{flex:.15,flexDirection:'column'}}/>
                                </View>:
                                <View  style={{flex:1,flexDirection:'row',marginTop:20}}>
                                <View style={{flex:.15,flexDirection:'column'}}/>
                                <View style={{flex:.7,flexDirection:'column'}}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <IconPhone width={35} height={35}/>
                                    </View>
                                    <View style={{flexDirection:"column",flex:1}}>
                                        <View style={{position:'absolute',top:0,flexDirection:'row',maxWidth:'100%',width:'100%',height:35,backgroundColor:'white'}}>
                                            <Text style={{paddingTop:Platform.OS=='ios'?3:3,color:'gray',fontSize:18,marginLeft:10,fontFamily:FONTS.khmernew}}>
                                                {
                                                    !this.state.txt_name?'ឈ្មោះពេញ':null
                                                }
                                                
                                            </Text>
                                            <Text style={{paddingTop:Platform.OS=='ios'?8:9,color:'gray',fontSize:12,marginLeft:5,fontFamily:FONTS.khmernew}}>
                                                {
                                                    !this.state.txt_name?'(បញ្ចូលបានតែអក្សរខ្មែរប៉ុណ្ណោះ)':null
                                                }
                                            </Text>
                                        </View>
                                        <TextInput 
                                            value={this.state.txt_name}
                                            onChangeText={(txt)=>this.setState({txt_name:txt})}                                            
                                            style={styles.inputex_name}
                                        />
                                    </View>
                                </View>
                                </View>
                                <View style={{flex:.15,flexDirection:'column'}}/>
                            </View>
                            }
                        </View>
                       
                        <View style={{flex:.1,flexDirection:'row',marginTop:20}}>
                                <TouchableOpacity style={styles.backButton}
                                onPress={()=>{
                                    !this.state.register?this.setState({register:true,label_title:'សូមបញ្ចូលលេខកូដដែលអ្នកទទួលបាន'})
                                    :
                                    !this.state.newMember?
                                    this.setState({newMember :true,label_title:'សូមបញ្ចូលឈ្មោះជាអក្សរខ្មែរ'})
                                    :
                                    NavigationService.navigate(NAV_TYPES.HOMELIST)
                                }
                                    }>
                                    <Text style={{textAlign:'center',color:'white',fontFamily:FONTS.khmernew,fontSize:16}}>
                                        ចុចទៅបន្ទាប់
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
               </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backgroundPNG:{
        flex: 1,
    },
    logo:{
        width: '100%',
        height: Platform.OS==='ios'?220:200,
        resizeMode: 'contain',
    },text_h1:{
        fontFamily:"AKbalthomKhmerNew",
        fontSize:20,
        textAlign:'center'
    },IconPhone:{
        width:20,
        height:20
    },textInput_Phone:{
        width:'100%',
        borderWidth:1,
        height:35,
        fontSize:20,
        padding:0,
        paddingLeft:10,
        backgroundColor:'white',
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        borderLeftWidth:0,
        borderColor:'white'
    },
    backButton:{
        backgroundColor:COLOR.background,
        height:35,
        flexDirection:"column",
        justifyContent:'center',
        paddingRight:20,
        paddingLeft:20,
        borderRadius:3,
        paddingTop:Platform.OS==='ios'?1:3
    },
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {borderWidth:1,borderColor:'white',padding:5},
    cell: {
        width: 35,
        height: 35,
        lineHeight: 32,
        fontSize: 24,
        backgroundColor:'white',
        textAlign: 'center',

    },
    focusCell: {
        borderColor: '#000',
    },
    inputex_name:{
        width:'100%',
        borderWidth:1,
        height:35,
        fontSize:18,
        padding:0,
        paddingLeft:10,
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        borderColor:'white',
        fontFamily:FONTS.khmernew,
    },
    styles_lable:{
        fontFamily:FONTS.khmernew,
        fontSize:20,
        textAlign:'center',
        color:'white'
    }
})