import { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import {AntDesign} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const restaurant = restaurants[0]

const Basket = () => {

    const [quantity,setQuantity] = useState(1);

    const onMinus = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
        
        
    }
    const onPlus = () => {
        setQuantity(quantity + 1);
    }
    const getTotal = () => {
        return (dish.price * quantity).toFixed(2);
    }

    return (
        <View style={styles.page}>
            <FontAwesome5 name="arrow-left" size={24} color="black" />
            <Text style={styles.name}>{restaurant.name}</Text>
            
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
        marginTop: 50,
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
});


export default Basket;