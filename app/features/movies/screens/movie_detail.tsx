import React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { Movie } from '../movie';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MovieDetailScreen = () => {
    const navigation = useNavigation();

    type Params = { item: string };

    const { item } = useLocalSearchParams<Params>();
    const movie: Movie = JSON.parse(item)

    const { width: screenWidth } = Dimensions.get('window');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Custom back button label
        });
    }, [navigation]);

    const onPressToBack = () => {
        router.back()
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={onPressToBack}>
                    <Ionicons name="arrow-back-circle" size={28} color="white" style={styles.backButtonIcon} />
                </TouchableOpacity>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={[styles.poster, { width: screenWidth - 32 }]}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.overview}>{movie.overview}</Text>
                <View style={styles.spacer} /> 
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: 'black',
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 30,
        zIndex: 1, // Ensure the back button is above other elements
    },
    backButtonIcon: {

    },
    poster: {
        height: 450,
        borderRadius: 8,
        marginTop: 0,
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    overview: {
        color: '#bab8b8',
        fontSize: 16,
        textAlign: 'left',
    },
    spacer: {
        flex: 1, // Take up the remaining space
        width: '100%', // Full width to push content up
    },
});

export default MovieDetailScreen;
