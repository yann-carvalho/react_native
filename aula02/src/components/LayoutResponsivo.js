import { View, Text } from 'react-native'
import React from 'react'

const LayoutResponsivo = () => {
  return (
    <View>
      <Text>LayoutResponsivo</Text>
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