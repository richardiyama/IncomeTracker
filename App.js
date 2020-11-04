import React, { useState } from 'react';
import { StyleSheet,View,Text,SafeAreaView, TextInput, Button,ScrollView} from 'react-native';
import Todo from './Todo';

const App = () => {

  const[ input, setInput] =  useState('')
  const[todos, setTodos] =  useState([])

  const addTodo = () =>{
    setTodos([input,...todos]);
    setInput('');

  }
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.titleText}>Let's build a React Native App in One Day 🚀🚀🚀 </Text>
        </View>
        <ScrollView>

        {todos.map(todo =>(
         <Todo title={todo}/>
        ))}
      
        </ScrollView>
        
        <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText ={text => setInput(text)}
        />
        <Button title='Add TODO' onPress={addTodo}/>
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
