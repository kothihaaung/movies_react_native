import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const PopularMoviesScreen = () => {
  const router = useRouter();

  // Movie title
  const movieTitle = 'Inception';

  // onPress function to navigate with params
  const onPress = () => {
    router.push({
      pathname: '/screens/movie_detail',
      params: { title: movieTitle }, // Pass the title as a param
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Movie: {movieTitle}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
