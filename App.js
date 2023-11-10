import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  
  const [data, setData] = useState([]);

  const handleAddItem = () => {
   
    if (inputValue.trim() !== '') {
     
      setData([...data, { key: String(data.length), value: inputValue }]);
    
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      
      <Button title="Adicionar" onPress={handleAddItem} />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 80,
    backgroundColor: 'orange',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius:2
 
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
