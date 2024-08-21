import React from 'react';
import { StyleSheet, Pressable, Text, View, Button } from 'react-native';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const PopularMoviesScreen = () => {
  const navigation = useNavigation();

  // movie title
  const movieTitle = 'Inception'; // Example movie title

  // onPress
  const onPress = () => {
    router.navigate('/screens/movie_detail')
    router.setParams({ title: movieTitle })
};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Movie Detail</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default PopularMoviesScreen;

