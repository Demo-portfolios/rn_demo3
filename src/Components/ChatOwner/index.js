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
export default class ChatOwner extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
        
    }
    render(){
         const {item,i}=this.props
        return(
               <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                  <View style={{
                    backgroundColor: COLOR.background,
                    padding:0,
                    borderRadius: 5,
                    marginTop: 5,
                    marginRight: "3%",
                    maxWidth: '70%',
                    alignSelf: 'flex-end',
                    borderRadius: 5,
                    paddingLeft:20,
                    paddingRight:20,
                    paddingBottom:5,
                    paddingTop:5
                    }} key={i}>
                    <Text style={{ fontSize: 16, color: "#fff"}} key={i}> {item['lastMessage']}</Text>
                    <View style={styles.rightArrow}></View>
                    <View style={styles.rightArrowOverlap}></View>
                  </View>
                  <Image source={IMAGE.girl2} style={{width:40,height:40}}/>
               </View>
        )
    }
}

const styles = StyleSheet.create({
     rightArrow: {
       position: "absolute",
       backgroundColor: COLOR.background,
       width: 20,
       height: 25,
       top: 0,
       borderTopLeftRadius: 0,
       right: -10
     },
     
     rightArrowOverlap: {
       position: "absolute",
       backgroundColor: "white",
       width: 20,
       height: 35,
       top: -6,
       borderTopLeftRadius: 20,
       right: -20
     
     },
     
     /*Arrow head for recevied messages*/
     leftArrow: {
         position: "absolute",
         backgroundColor: "#dedede",
         backgroundColor:"red",
         width: 20,
         height: 25,
         bottom: 0,
         borderBottomRightRadius: 25,
         left: -10
     },
     
     leftArrowOverlap: {
         position: "absolute",
         backgroundColor: "#eeeeee",
         //backgroundColor:"green",
         width: 20,
         height: 35,
         bottom: -6,
         borderBottomRightRadius: 18,
         left: -20
     
     },
     })