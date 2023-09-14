import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>BOOKWORM</Text>
      </View>
    )
  }
  const Main = () => {
    return (
    <View style={styles.hero}>
      <Image style={styles.book} source={require('./media/libary.jpg')} />
    </View>
    
    )
  }

  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>


       <View style={styles.box}>
        <View style={styles.inner}>
        <Image style={styles.book} source={require('./media/plus.jpg')} />
        </View>
        <Text style={styles.caption}>ADD A BOOK</Text>
       </View>

       <View style={styles.box}>
        <View style={styles.inner}>
        <Image style={styles.book} source={require('./media/graph.jpg')} />
        </View>
        <Text style={styles.caption}>HISTORY</Text>
       </View>

       <View style={styles.box}>
        <View style={styles.inner}>
        <Image style={styles.book} source={require('./media/books.jpg')} />
        </View>
        <Text style={styles.caption}>GENRE</Text>
       </View>

       <View style={styles.box}>
        <View style={styles.inner}>
        <Image style={styles.book} source={require('./media/libary.jpg')} />
        </View>
        <Text style={styles.caption}>LIBRARY</Text>
       </View>

      </View>
      
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Boxes/>
      <Main/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  hero: {
width: '100%',
height: '60%',
backgroundColor: '#c8c8c8',
  },
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
    //backgroundColor: '#c8c8c8', 
  },
  logo: {
    fontSize: 30,
    color: '#0D52BD',
    fontWeight: 'bold',
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    //backgroundColor: 'red',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
    //backgroundColor: 'green',
  },
  inner: {
    flex: 1,
    backgroundColor: "#c8c8c8",
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: '100%',
    height: '100%',
  },
  caption: {
   fontSize: 20,
   fontWeight: 'bold',
   color: 'black',
  },
});

export default App;