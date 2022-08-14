import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrdersScreen';
import OrderDetails from './src/screens/OrderDetails';

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      <RootNavigator />
    {/* Restaurant item */}
      {/* <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/> */}
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <Basket /> */}
      {/* <OrderScreen /> */}
      {/* <OrderDetails /> */}
      {/* <DishDetailsScreen/>  */}
      {/* <FlatList
        data = {restaurants}
        renderItem = {({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
      /> */}
      <StatusBar style="light" />
      {/* </View> */}
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // padding: 10, 
//     // paddingVertical: 30,
//   },
// });
