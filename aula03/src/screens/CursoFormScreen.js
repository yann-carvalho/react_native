import { View, Text } from 'react-native'
import React from 'react'

const CursoFormScreen = ({ route, navigation }) => {

  const itemId = route.params?.itemId
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [editando, setEditando] = useState(false)

  useEffect(() => {
    if (itemId) {
      const buscarCurso = async () => {
        const docRef = doc(db, 'cursos', itemId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setNome(docSnap.data().name)
          setDescricao(docSnap.data().description)
          setEditando(true)
        }
      }
      buscarCurso()
    }
  }, [itemId])


  return (
    <View>
      <Text>CursoFormScreen</Text>
    </View>
  )
}

export default CursoFormScreen