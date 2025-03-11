import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LayoutResponsivo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Cabeçalho</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Conteúdo Principal</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Rodapé</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'},
  content: {flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', justifyContent: 'center', alignItems: 'center'},
  footer: {flex: 1, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 20}
})


export default LayoutResponsivo