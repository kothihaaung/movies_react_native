import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

const MovieDetailScreen = () => {
    const navigation = useNavigation();

    type Params = {
        title: string
    };

    const { title } = useLocalSearchParams<Params>();

    React.useLayoutEffect(() => {
        navigation.setOptions({
        title: title, // Custom title
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
