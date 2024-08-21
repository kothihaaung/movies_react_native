import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieDetailScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Movie Details', // Custom title
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
