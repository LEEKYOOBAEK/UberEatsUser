import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import RootNavigator from './src/navigation';
import { NavigationContainer } from "@react-navigation/native";

import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native'
Amplify.configure(config);

function App() {
  return (
    <NavigationContainer>
      
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
export default withAuthenticator(App);