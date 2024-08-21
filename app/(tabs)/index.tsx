import { Link } from 'expo-router';
import React from 'react';
import {Text, View} from 'react-native';

const PopularMoviesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <Link href='/screens/movie_detail'>Explore</Link>
    </View>
  );
};

export default PopularMoviesScreen;