import { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import {AntDesign} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const restaurant = restaurants[0]

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.row}>

                <View style={styles.quantityContainer}>
                    <Text>1</Text>
                </View>
                <Text style={{fontWeight:'600'}}>{basketDish.name}</Text>
                <Text style={{marginLeft: "auto"}}>${basketDish.price}</Text>
                
        </View>
    )
}

const Basket = () => {

    return (
        <View style={styles.page}>
            <FontAwesome5 name="arrow-left" size={24} color="black" />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={{fontSize:19, fontWeight: "bold", marginTop: 20}}>Your Items</Text>
            <FlatList 
                data={restaurant.dishes} 
                renderItem={({item}) => <BasketDishItem basketDish={item}/>}

            />
            <View style={styles.seperator}></View>
            
           

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create order</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
    },
    description: {
        color: "gray",
    },

    seperator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    quantity: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 20,     
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    quantityContainer: {
        marginRight: 10,
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical:2,
        borderRadius: 3,
    }
});


export default Basket;