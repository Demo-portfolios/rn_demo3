import React,{Component} from 'react'
import {
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    View, 
    Image,
    Platform
} from 'react-native'
import {COLOR,ICON,IMAGE} from '../../Assets/index'
import IconBack from '../../Assets/images/SVG/IconBack.svg'
import IconCall from '../../Assets/images/SVG/IconCall.svg'
import IconVideoCall from '../../Assets/images/SVG/IconVideoCall.svg'
export default class HeaderChat extends Component{
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
                              <TouchableOpacity 
                                   style={{justifyContent:'center'}}>
                                   <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'column'}}>
                                             <Image source={IMAGE.girl2} style={styles.imageProfile}/>
                                        </View>
                                        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:10,padding:0}}>
                                             <View style={{flexDirection:'row'}}>
                                                  <Text
                                                       numberOfLines={1}
                                                       style={{width:'80%',fontSize:18,padding:0,lineHeight:30,marginTop:-10}}
                                                  >AasdklasdjaskdjaskldjaskdjaskjdaslkjAA</Text>
                                             </View>
                                             <View style={{flexDirection:'row'}}>
                                                  <Text
                                                       numberOfLines={1}
                                                       style={{width:'80%',marginBottom:-15}}
                                                  >Last seen at 3:15 PM</Text>
                                             </View>
                                             
                                        </View>
                                   </View>
                              </TouchableOpacity>
                         </View>
                    </View>
                         <View style={styles.type_none}>
                         <View style={{flexDirection:'column',justifyContent:"center"}}>
                                   <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity style={{marginRight:10}}>
                                             <IconCall width={40} height={40}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                             <IconVideoCall width={40} height={40}/>
                                        </TouchableOpacity>
                                   </View>
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
    }
    
  });