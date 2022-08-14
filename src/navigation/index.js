import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Restaurant" 
                component={RestaurantDetailsScreen} 
                options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;