import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    pasatiempo: 'Aprender más sobre Programación',
  },
  {
    id: '2',
    pasatiempo: 'Ejercicio y Deporte',
  },
  {
    id: '3',
    pasatiempo: 'Videojuegos',
  },
  {
    id: '4',
    pasatiempo: 'Youtube',
  }
]

const Item = ({ pasatiempo }) => (
  <View style={{ padding: 10 }}>
    <Text style={styles.textContent}> • {pasatiempo}</Text>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item pasatiempo = { item.pasatiempo } />
  )

  return (
    <View style={styles.container}>
      <Image style= { styles.image } source = { require('./src/img/foto.jpg') } />

      <FlatList 

        ListHeaderComponent={
          <>
          <Text style = { styles.textContent }>Fernando Xavier Maldonado Canjura</Text>
          <Text style = { styles.subtitle }>Carrera</Text>
          <Text style = { styles.textContent }>Ingenieria en Ciencias de la Computacion</Text>
          <Text style = { styles.subtitle }>Pasatiempos</Text>
          </>
        }

        data = { DATA }
        renderItem = { renderItem }
        keyExtractor = { item => item.id }

        ListFooterComponent={
          <>
            <Text style = { styles.subtitle }>Lenguaje de Programación</Text>
            <Text style = { styles.textContent }>JavaScript</Text>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2530',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 25,
  },
  textContent:{
    fontSize: 20,
    color: '#F3F3EA',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 20,
    color: '#F3F3EA',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center'
  },
});
