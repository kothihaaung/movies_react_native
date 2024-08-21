import { Link } from 'expo-router';
import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';

const PopularMoviesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <Link href="/screens/movie_detail" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Movie Detail</Text>
        </Pressable>
      </Link>
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
    backgroundColor: 'blue',
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

