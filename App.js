import React, { useState } from 'react';
import { StyleSheet,View,Text,SafeAreaView, TextInput, Button,ScrollView} from 'react-native';
import Todo from './Todo';

const App = () => {

  const[ description, setDescription] =  useState('')
  const[amount, setAmount] =  useState(0)
  const[gigs,setGigs] = useState([
    {
      description: 'Freelance Job with Richie',
      amount:500.00
    }
  ])

  const addTodo = () =>{
    setTodos([input,...todos]);
    setInput('');

  }
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.titleText}>Let's build a React Native App for Freelance Devs to Track Income 🚀🚀🚀 </Text>
        </View>
        
        
        <TextInput
        style={styles.todoInput}
        value={description}
        placeholder='Enter a description'
        onChangeText ={text => setDescription(text)}
        />

        <TextInput
        style={styles.todoInput}
        value={amount}
        keyboardType='numeric'
        onChangeText ={text => setAmount(text)}
        />
        {/*<Button title='Add TODO' onPress={addTodo}/>*/}
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({

  todoInput:{
height: 40,
margin: 20,
borderColor: 'red',
borderWidth: 1
  },
  titleText:{
    //backgroundColor:'red',
    fontSize: 30,
    fontWeight: "bold"
    
  },
  red: {
    color: 'red',
  },
});

export default App;
