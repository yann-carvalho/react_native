import { View, Text, FlatList } from 'react-native';
import React from 'react';

const Exercicio4 = () => {
  const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <View>
      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Exercicio4;