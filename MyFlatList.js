import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const MyFlatList = () => {
  const [data, setData] = useState([]); // Lista vazia inicialmente

  const [newItemText, setNewItemText] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const addNewItem = () => {
    if (newItemText.trim() !== '') {
      const newItem = {
        id: Math.random().toString(), // Gera um ID aleatório (pode usar uma biblioteca como 'uuid' para IDs mais seguros)
        title: newItemText,
      };
      setData([...data, newItem]);
      setNewItemText('');
    }
  };

  return (
    <View style={styles.container}>
      {/* TextInput para inserir novo item */}
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={newItemText}
        onChangeText={text => setNewItemText(text)}
      />
      {/* Botão para adicionar novo item */}
      <Button title="Adicionar" onPress={addNewItem} />

      {/* FlatList */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
});

export default MyFlatList;
