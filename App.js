
import React, { useState } from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';

export default function App() {

  /* let arr= [];
   let Id=0;
  const [Lists, setlists] = useState([{id:1, data:"loading"}]); */

  const [text, setText] = useState();
  const [Lists1, setlists1] = useState([]);

   const storedata = async () =>{
    
    /* arr.push({id:Id, data:text});
      Id++;
    
     setlists(arr);
     console.log(arr);*/

     if(text!=null)
     {
     setlists1((obj)=>{
      return [...obj, text];
         })
        }

     setText('');

    await AsyncStorage.setItem("mylist", Lists1);
    console.log( JSON.parse(await AsyncStorage.getItem("mylist")) ); 
  
   }


     return(
      <View style={styles.container}>
          <Appbar.Header>
             <Appbar.Content title="Todo List"  />
          </Appbar.Header>
       
          <TextInput 
            placeholder="add todo item" 
            value={text}
            onChangeText={text => setText(text)}
         />
    
         <Button onPress={storedata}
           title="Add Todo" />
       

         <View style={styles.centered}> 
                <Text style={{fontSize: 30}}>
                  {Lists1.map((index, item) =>{
                          return (<>
                              <Text style={styles.listing}> {index}{"\n"}</Text>
                       </>)})}
                     </Text>
         </View>

         </View>   
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
  
  listing: {
    color:"red",
    fontStyle:"italic",
  },
  centered: {
    justifyContent:"center",
    alignItems:"center"
  },
  
});




