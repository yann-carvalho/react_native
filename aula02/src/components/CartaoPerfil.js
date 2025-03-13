import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

const CartaoPerfil = () => {

  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

  return (
    <View style={styles.container}>

      {/* Imagem de Perfil */}
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
        style={styles.imagemPerfil}
      />

      {/* Nome e Ocupação */}
      <Text style={styles.nome}>John Doe</Text>
      <Text style={styles.ocupacao}>Desenvolvedor Mobile</Text>


      {/* Botão de Detalhes */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setDetalhesVisiveis(!detalhesVisiveis)}>
        <Text style={styles.textoBotao}>
          {detalhesVisiveis ? 'Ver Menos' : 'Ver Mais'}
        </Text>
      </TouchableOpacity>

      {/* Área dos Detalhes visíveis apenas quando detalhesVisiveis for true */}
      {detalhesVisiveis && (
        <View style={styles.detalhes}>
          <Text style={styles.textoDetalhe}>Localização: João Pessoa</Text>
          <Text style={styles.textoDetalhe}>E-mail: email@email.com</Text>
          <Text style={styles.textoDetalhe}>Hobbies: Programar, Viajar, Jogar</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  // Container principal do cartão
  container: {
    width: 300, // Largura do cartão
    padding: 20, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    backgroundColor: '#fff', // Fundo branco
    alignItems: 'center', // Centraliza os itens
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Direção da sombra
    shadowOpacity: 0.1, // Transparência da sombra
    shadowRadius: 4, // Espalhamento da sombra
    elevation: 5, // Sombra no Android
  },

  // Estilo da imagem de perfil
  imagemPerfil: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    borderRadius: 50, // Deixa a imagem redonda
    marginBottom: 10, // Espaço abaixo da imagem
  },

  // Nome do usuário
  nome: {
    fontSize: 22, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    color: '#333', // Cor escura
  },

  // Ocupação do usuário
  ocupacao: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },

  // Estilo do botão
  botao: {
    backgroundColor: '#0077b5', // Azul do LinkedIn
    padding: 10, // Espaçamento interno
    borderRadius: 5, // Bordas arredondadas
    alignItems: 'center', // Centraliza o texto
    marginVertical: 10, // Espaço vertical
  },

  // Texto do botão
  textoBotao: {
    color: '#fff', // Texto branco
    fontSize: 16, // Tamanho do texto
    fontWeight: 'bold', // Negrito
  },

  // Estilo da área dos detalhes
  detalhes: {
    marginTop: 10, // Espaço acima
    paddingTop: 10, // Espaço interno superior
    borderTopWidth: 1, // Linha separadora
    borderColor: '#ddd', // Cor da linha separadora
    width: '100%', // Ocupa a largura total do cartão
  },

  // Texto dentro da área de detalhes
  textoDetalhe: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
})

export default CartaoPerfil