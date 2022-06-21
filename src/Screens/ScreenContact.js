import React,{Component,Fragment,useEffect} from 'react'
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
    FlatList
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
import {IMAGE,FONTS,COLOR} from '../Assets/index'
import IconSearch from '../Assets/images/SVG/IconSearch.svg'
import IconClear from '../Assets/images/SVG/IconClear.svg'
import navigationService from '../Service/navigationService'
import HeaderContact from '../Components/HeaderContact'
import Contacts from 'react-native-contacts';
import ListItem from '../Components/ListItem'
export default class ScreenContact extends Component{
    constructor(prop){
        super(prop)
        this.state={
           contacts:[]
        }
        
    }
   

   componentDidMount(){
    Contacts.getAll().then(contacts => {
        contacts.sort((a,b)=>
            a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        try{
            this.setState({"contacts":contacts});
        }catch(e){
            console.log(e)
        }
      })
   }
   UNSAFE_componentWillReceiveProps(nextProps){
    
   }
    // _search = (text) => {
    //     const phoneNumberRegex = 
    //       /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    //     if (text === '' || text === null) {
    //       loadContacts();
    //     } else if (phoneNumberRegex.test(text)) {
    //       Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
    //         contacts.sort(
    //           (a, b) => 
    //             a.givenName.toLowerCase() > b.givenName.toLowerCase(),
    //         );
    //         setContacts(contacts);
    //         console.log('contacts', contacts);
    //       });
    //     } else {
    //       Contacts.getContactsMatchingString(text, (err, contacts) => {
    //         contacts.sort(
    //           (a, b) =>
    //             a.givenName.toLowerCase() > b.givenName.toLowerCase(),
    //         );
    //         setContacts(contacts);
    //         console.log('contacts', contacts);
    //       });
    //     }
    //   };
      _openContact = (contact) => {
        // console.log(JSON.stringify(contact));
        Contacts.openExistingContact(contact, () => {});
      };
    render(){
        const dataChat=[
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:7,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:9,mute:false,time:'7:00AM'},
            {name:'រិទ្ធ',type:'account',lastMessage:'អត្ថបទ',countMessageNoSeen:1,mute:true,time:'7:00AM'}
        ]
        return(
        //   <KeyboardAvoidingView
        //   behavior={Platform.OS === "ios" ? "padding" : 'null'}
        //   style={styles.container}
        //   >
        //        <Fragment>
        //             <SafeAreaView style={{ flex:0,zIndex:1,backgroundColor:'white'}} />
        //             <SafeAreaView style={styles.background_mode}>
        //                  <View style={styles.backgroud_top}>
        //                       <HeaderContact
        //                            fun_back={()=>NavigationService.goBack()}
        //                            profile={false}
        //                       />
        //                  </View>
        //                  <View style={styles.search}>
        //                     <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        //                         <IconSearch width={25} height={25}/>
        //                     </View>
        //                     <View style={{flexDirection:'column',flex:1}}>
        //                         <TextInput 
        //                         placeholder={'ស្វែករក'}
        //                         placeholderTextColor="gray"
        //                         onChangeText={(text)=>{this.setState({text_search:text})}}
        //                         value={this.state.text_search}
        //                         style={styles.InputSearch}/>
        //                     </View>
        //                     {
        //                         this.state.text_search?
        //                         <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        //                             <TouchableOpacity onPress={()=>{this.setState({text_search:''})}} >
        //                                 <IconClear width={30} height={30}/>
        //                             </TouchableOpacity>
        //                         </View>:null
        //                     }
        //                  </View>
        //                  <ScrollView 
        //                       ref="scrollView"
        //                       style={{
        //                            flex:1,
        //                            backgroundColor:'white',
        //                            paddingBottom:100,
        //                            paddingRight:20,
        //                            paddingLeft:20
        //                  }}>
        //                       <View style={{paddingBottom:100}}>
        //                       <Text>A</Text>
        //                       </View>
        //                  </ScrollView>
        //             </SafeAreaView>
        //        </Fragment>
        //   </KeyboardAvoidingView>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.header}>
                Access Contact List in React Native
                </Text>
                <TextInput
                // onChangeText={()=>this._search()}
                placeholder="Search"
                style={styles.searchBar}
                />
                </View> 
                 <FlatList  
                 data={this.state.contacts}
                 renderItem={(contact) => {
                    return (
                    <ListItem
                            key={contact.item.recordID}
                            item={contact.item}
                            // onPress={()=>this._openContact()}
                        />
                    );
                }}
                keyExtractor={(item) => item.recordID}
                />
        </SafeAreaView>
        )
    }
}
// const styles = StyleSheet.create({
//      container: {
//           flex: 1
//         },
//     background_mode:{
//         flex:1,
//         flexDirection:'column',
//         backgroundColor:'white',
//     },
//     backgroud_top:{
//           marginTop:25,
//           height:50,
//           flexDirection:"column",
//           marginLeft:20,
//           marginRight:20,
//           paddingBottom:30
//     },
//     container: {
//      flex: 1,
//      width: "100%",
//      flexDirection: "row", 
//      padding: 0,
//      },search:{
//           flexDirection:'row',
//           backgroundColor:'#f1f2f2',
//           padding:4,
//           borderRadius:5,
//           paddingLeft:15,
//           paddingRight:15,
//           marginRight:20,
//           marginLeft:20
//       },InputSearch:{
//           width:'100%',
//           padding:0,
//           paddingLeft:15,
//           fontSize:18,
//           fontFamily:FONTS.khmernew,
//           height:30
//       },
// })
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#4591ed',
      color: 'white',
      paddingHorizontal: 15,
      paddingVertical: 15,
      fontSize: 20,
    },
    searchBar: {
      backgroundColor: '#f0eded',
      paddingHorizontal: 30,
      paddingVertical: Platform.OS === 'android' ? undefined : 15,
    },
  });