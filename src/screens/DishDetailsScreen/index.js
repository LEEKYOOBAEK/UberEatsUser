import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Dish } from '../../models';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Basket from '../Basket';
import { ActivityIndicator } from 'react-native-paper';



const DishDetailsScreen = () => {
    const [dish, setDish] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.id;

    useEffect(()=>{
        if (id) {
            DataStore.query(Dish, id).then(setDish)
        }
        
    }, [id])

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

    if (!dish) {
        return <ActivityIndicator size={"large"} color="gray"/>
    }

    return (
        <View style={styles.page}>
            {/* <FontAwesome5 name="arrow-left" size={24} color="black" /> */}
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.seperator}></View>
            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color="black" onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color="black" onPress={onPlus}/>
            </View>

            <Pressable onPress={() => navigation.navigate("Basket")}style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to basket &#8226; $ {getTotal()}</Text>
            </Pressable>
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
        fontSize: 30,
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


export default DishDetailsScreen;