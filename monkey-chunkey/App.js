import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native';
import db from './localdb'
import {Header} from 'react-native-elements'
import Phonicsoundbutton from './components/Phonicsoundbutton'

export default class App extends React.Component{
constructor(){
  super()
  this.state={
    text:'',chunks:[],phones:[]

  }
}
render(){
  return(
    <View style={styles.container}> 
    <Header backgroundColor={'red'} centerComponent={{ text:'monkey chunky' ,style:{color:'white',fontSize:20}}}/>
    <Image style={styles.imageicon} source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}/>
    <TextInput style={styles.inputbox}onChangeText={text=>{
      this.setState({
     text:text
        
      })
    }}value={this.state.text}/>
    <TouchableOpacity style={styles.gobutton}onPress={()=>{
      var word=this.state.text.toLowerCase().trim()
      db[word]?(this.setState({chunks:db[word].chunks}),
      this.setState({phones:db[word].phones}))
      :alert("the word does not exist in our database")
   }}>
   <Text style={styles.buttontext}>go</Text>
   </TouchableOpacity>
  <View>
          {this.state.chunks.map((item,index)=> {
            return (
            <Phonicsoundbutton 
            wordchunk={this.state.chunks[index]}
            soundchunk={this.state.phones[index]}/>
              );
          })}
        </View>
   </View>
  )
}
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundcolor:'yellow',

},
  inputbox:{
    marginTop:20,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4
  },
  gobutton:{
width:'50%',
height:55,
alignSelf:'center',
padding:10,
margin:10

  },
   chunkButton:{
width: '60%', height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10, margin: 5, backgroundColor: 'red'

  },
  buttontext:{
fontSize:30,
fontWeight:'bold',
textAlign:'center'
  },
  displayText:{
    textAlign:'center',
    fontSize:50
  },
  imageicon:{
    width:150,
    height:150,
    marginLeft:95,

  }
})
  