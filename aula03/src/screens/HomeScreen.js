import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getCursos } from '../services/CursoService'

const HomeScreen = ({ navigation }) => {

  const [items, setItems] = useState([])

  const carregarCursos = async () => {
    const cursos = await getCursos()
    setItems(cursos)
  }

  useFocusEffect(
    useCallback(() => {
      carregarCursos()
    }, [])
  )

  const confirmarExclusao = (id) => {
    Alert.alert(
      'Confirmar',
      'Você tem certeza que deseja excluir este curso?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deletarCurso(id)
            carregarCursos()
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Details', {
              itemId: item.id,
              name: item.name,
              description: item.description,
            })}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button title="🗑️" onPress={() => confirmarExclusao(item.id)} color='#d9534f' />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  itemTitle: { fontSize: 18, fontWeight: 'bold' },
  itemDescription: { fontSize: 14, color: '#555' },
})

export default HomeScreen