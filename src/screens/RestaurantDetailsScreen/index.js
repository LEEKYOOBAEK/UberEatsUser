import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import restaurants from '../../../assets/data/restaurants.json' ;
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
    const route = useRoute();

    const id = route.params?.id;
    console.warn(id);

    return (
        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={()=><Header restaurant={restaurant}/>}
                data={restaurant.dishes}
                renderItem={({item}) => <DishListItem dish={item} />}
                keyExtractor={(item)=>item.name}
            />
            <Ionicons 
            name="arrow-back-circle" 
            size={45} 
            color="white" 
            style={styles.iconContainer}
            /> 
        </View>
    )
}



export default RestaurantDetailsPage;