import React, { useState,useEffect } from 'react';
import { StyleSheet,Dimensions,View,Text,SafeAreaView, TextInput, Button,ScrollView} from 'react-native';
import Todo from './Todo';
import {
  BarChart,
  LineChart
} from "react-native-chart-kit";
import moment from 'moment';

const App = () => {

  const[ description, setDescription] =  useState('')
  const[amount, setAmount] =  useState('')
  const[total, setTotal] = useState(0)
  const[data,setData] = useState([
    
   {[moment()]: 2000},
    {[moment().subtract(1, 'days')]: 2500},
  ])
  
  const[gigs,setGigs] = useState([
    {
      description: 'Freelance Job with Richie',
      amount:500,
      timestamp: new Date()
    }
  ]);

  console.log(data);
  useEffect(() => {
    setTotal(gigs.reduce((total,gig) =>total + Number(gig.amount), 0));
   
  }, [gigs])

  const addGig = () =>{
    setGigs([...gigs,{
      description: description,
      amount: amount,
      timestamp: new Date()
    }]);
    setDescription('');
    setAmount('');

  }

  
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.titleText}>Let's build a React Native App for Freelance Devs to Track Income 🚀🚀🚀 </Text>
        </View>
        <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: [new Date(),"Tomorrow"],
      datasets:[
        {
          data:[
            Math.random() * 100,
            Math.random() * 100,
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    //yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "green",
      backgroundGradientTo: "green",
      decimalPlaces:null, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
        <Text>Total Income: ${total}</Text>
        <TextInput
        style={styles.input}
        value={description}
        placeholder='Enter a description'
        onChangeText ={text => setDescription(text)}
        />

        <TextInput
        style={styles.input}
        value={amount}
        placeholder='Enter the amount you made in USD ($)'
        keyboardType='numeric'
        onChangeText ={text => setAmount(text)}
        />
        <Button disabled={!amount && !description} title='Add Gig 🚀' onPress={addGig}/>

        {gigs.map(gig =>(
          <View>
               <Text>{gig.description}</Text>
               <Text>${gig.amount}</Text>
               </View>

        ))}


      </SafeAreaView>
    );
};

const styles = StyleSheet.create({

  input:{
height: 40,
marginTop: 10,
padding:20,
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
