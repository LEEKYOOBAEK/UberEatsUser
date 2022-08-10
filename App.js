import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
    {/* Restaurant item */}
      {/* <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/> */}
      <HomeScreen />
      {/* <FlatList
        data = {restaurants}
        renderItem = {({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
      /> */}
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
    paddingVertical: 30,
  },
});
