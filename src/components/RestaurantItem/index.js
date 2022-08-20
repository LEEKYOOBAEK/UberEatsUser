import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg";

const RestaurantItem = ({ restaurant }) => {

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Restaurant", {id: restaurant.id});
  }
  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image 
        source={{ 
          uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE,
        }} 
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
          ${restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>
            {restaurant.rating.toFixed(1)}
          </Text>
        </View>
      </View>
    </Pressable>
  )
};

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
      width: "100%",
      marginVertical: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 5/3,
      marginBottom: 5,
    },
    title: {
      fontSize: 16, 
      fontWeight: "500",
      marginVertical: 5,
    },
    subtitle: {
      color: "grey",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    rating: {
      marginLeft: "auto",
      backgroundColor:'lightgray',
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: 20,
    },
  });
  