import { View, FlatList, Text, StyleSheet } from 'react-native';

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.row}>

                <View style={styles.quantityContainer}>
                    <Text>1</Text>
                </View>
                <Text style={{fontWeight:'600'}}>{basketDish.name}</Text>
                <Text style={{marginLeft: "auto"}}>${basketDish.price}</Text>
                
        </View>
    );
};

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    quantityContainer: {
        marginRight: 10,
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical:2,
        borderRadius: 3,
    }
});






export default BasketDishItem;