import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {

  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }

  return (
    <View>
      <Button onPress={incrementar} title="Incrementar" />
      <Text>O contador está em: {contador}</Text>
      <Button onPress={decrementar} title="Decrementar" />
    </View>
  )
}

export default Exercicio2