import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet } from 'react-native';


interface Movie {
  id: number;
  title: string;
}

const PopularMoviesScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const apiKey = '';

  useEffect(() => {
    // Function to fetch data from the TMDB API
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key='
        );
        
        const data = await response.json();
        setMovies(data.results); // Assuming the API returns an array of movie objects under "results"
      
      } catch (error) {
        console.error('Error fetching data:', error);
      
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        renderItem={({ item }) => (
          <Text style={styles.title}>{item.title}</Text> // Display the movie title
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginVertical: 8,
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PopularMoviesScreen;
