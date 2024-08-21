import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet, Image, SafeAreaView } from 'react-native';
import PopularMoviesScreen from '../features/movies/screens/popular_movies';
import { Provider } from 'react-redux';
import { store } from '../store';

const PopularMoviesScreenTab = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <PopularMoviesScreen />
      </SafeAreaView>
    </Provider>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default PopularMoviesScreenTab;