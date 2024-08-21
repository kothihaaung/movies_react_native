import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet, Image, SafeAreaView } from 'react-native';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const ACCESS_TOKEN = '';

const PopularMoviesScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from the TMDB API
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        
        const data = await response.json();

        // store to local cache
        setMovies(data.results);

      } catch (error) {
        console.error('Error fetching data:', error);

      } finally {
        setLoading(false);
      }
    };

    // Call API
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
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            {/* Display the poster image */}
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
              style={styles.poster}
            />
            {/* Display the movie title */}
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        numColumns={2} // Set number of columns in grid
        columnWrapperStyle={styles.columnWrapper} // Style for spacing between columns
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 16, // Padding at the top of the safe area
    backgroundColor: '#000', // Background color
  },
  movieContainer: {
    flex: 1,
    margin: 8, // Margin around each movie item
    alignItems: 'center',
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between', // Space out the columns
  },
});

export default PopularMoviesScreen;
