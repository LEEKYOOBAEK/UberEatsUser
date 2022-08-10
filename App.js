import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from './assets/data/restaurants.json';

export default function App() {
  return (
    <View style={styles.container}>
    {/* Restaurant item */}
      <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
