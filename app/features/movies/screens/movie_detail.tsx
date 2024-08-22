import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { Movie } from '../movie';

const MovieDetailScreen = () => {
    const navigation = useNavigation();

    type Params = {
        item: string
    };

    const { item } = useLocalSearchParams<Params>();
    const movie: Movie = JSON.parse(item)
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
        title: movie.title, // Custom title
        headerBackTitle: 'Back', // Custom back button label
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Movie Detail Screen</Text>
        </View>
    );
};

export default MovieDetailScreen;
