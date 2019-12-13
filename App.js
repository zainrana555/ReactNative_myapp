import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Zee');
  const [age, setAge] = useState('25');

  return (
    <View style={styles.container}>
      <Text>My name is <Text style={styles.boldText}>{name}</Text> and age <Text style={styles.boldText}>{age}</Text> </Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter name'
        onChangeText= { (val) => setName(val)}
      />
      <TextInput 
        style={styles.input}
        keyboardType= 'numeric'
        placeholder='Enter age'
        onChangeText= { (val) => setAge(val)}
      />
      <View style={styles.buttonContainer}>
        <Button title='Update State' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    margin: 10,
    width: 160,
  }

});
