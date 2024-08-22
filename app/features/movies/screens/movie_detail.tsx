import React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { Movie } from '../movie';
import { router } from 'expo-router';

const MovieDetailScreen = () => {
    const navigation = useNavigation();

    type Params = {
        item: string
    };

    const { item } = useLocalSearchParams<Params>();
    const movie: Movie = JSON.parse(item)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Custom back button label
        });
    }, [navigation]);

    const onPress = () => {
        router.back()
    };

    return (
        <View style={styles.container}>
            <Button title='Back' onPress={onPress} />
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.poster}
            />

            <Text style={styles.title}>{movie.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#222',
    },
    poster: {
      width: 300,
      height: 450,
      borderRadius: 8,
    },
    title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
  });

export default MovieDetailScreen;
