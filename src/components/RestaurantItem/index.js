import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({ title }) => {
  
  return (
    <View style={styles.restaurantContainer}>
        <Image 
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'}} 
          style={styles.image}
        />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>$ $1.99 15-30 minutes</Text>
      </View>
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
  });
  