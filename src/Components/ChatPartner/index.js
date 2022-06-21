import React,{Component} from 'react'
import {
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    View, 
    Image,
    Platform,
    Animated
} from 'react-native'
import {COLOR,IMAGE,ICON} from '../../Assets/index'
export default class ChatPartner extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
        
    }
    render(){
         const {item,i}=this.props
        return(
               <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                   <Image source={IMAGE.girl2} style={{width:40,height:40}}/>
                   <View style={{
                    backgroundColor: "#dedede",
                    padding:0,
                    borderRadius: 5,
                    marginTop: 5,
                    marginLeft: "5%",
                    maxWidth: '70%',
                    alignSelf: 'flex-start',
                    borderRadius: 5,
                    paddingLeft:20,
                    paddingRight:20,
                    paddingBottom:5,
                    paddingTop:5
                  }} key={i}>
                      <Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }} key={i}> {item.lastMessage}</Text>
                      <View style={styles.leftArrow}>
                      </View>
                      <View style={styles.leftArrowOverlap}></View>
                  </View>
                 
               </View>
        )
    }
}

const styles = StyleSheet.create({
     /*Arrow head for recevied messages*/
     leftArrow: {
         position: "absolute",
         backgroundColor: "#dedede",
         width: 20,
         height: 25,
         top: 0,
         borderTopRightRadius: 0,
         left: -10
     },
     
     leftArrowOverlap: {
         position: "absolute",
         backgroundColor: "white",
         width: 20,
         height: 35,
         top: -6,
         borderTopRightRadius: 20,
         left: -20
     
     },
     })