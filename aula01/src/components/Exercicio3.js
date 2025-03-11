import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

const Exercicio3 = () => {
  const [texto, setTexto] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Text>Você digitou: {texto}</Text>
    </View>
  );
};

export default Exercicio3;