import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';

import OrderDetails from '../screens/OrderDetails';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import DishListItem from "../components/DishListItem";
import BasketDishItem from "../components/BusketDishItem";
import OrdersScreen from '../screens/OrdersScreen';
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from '../../src/screens/ProfileScreen';
import { useAuthContext } from "../context/AuthContext";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const {dbUser} = useAuthContext();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {dbUser ? (
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
            ) : (
                <Stack.Screen name="Profile" component={ProfileScreen} />
            )}
            
            
            {/* <Stack.Screen
                name="Restaurant" 
                component={RestaurantDetailsScreen} 
                options={ {headerShown: false }}/> */}
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} barStyle={{backgroundColor: "white"}}>
            
            <Tab.Screen 
                name='Home' 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => (<Foundation name="home" size={24} color={color} />)
                }}
            />
            <Tab.Screen 
                name='Order' 
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({color}) => (<MaterialIcons name="list-alt" size={24} color={color} />)
                }}
            />
            <Tab.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color}) => (<FontAwesome5 name="user-alt" size={24} color={color} />)
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen 
                name="Restaurant" 
                component={RestaurantDetailsScreen} 
                options={{headerShown:false}}/>
            <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
            <HomeStack.Screen name="Basket" component={Basket} />
        </HomeStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={OrdersScreen} />
            <OrdersStack.Screen name="Order" component={OrderDetails} />
        </OrdersStack.Navigator>
    );
};

export default RootNavigator;