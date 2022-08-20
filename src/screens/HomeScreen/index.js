import { DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Restaurant } from '../../models'
import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
// import restaurants from '../../../assets/data/restaurants.json';


export default function HomeScreen() {
  //데이터 상태 갱신:useState 데이터를 바꾸고 리스트에 있는 데이터를 자동적으로 갱신
  const [restaurants, setRestaurants] = useState([]);

  //화면이 리로드 되는 경우, 이벤트가 있을 때, 화면 lifecycle에 따라 감지함
  useEffect(()=> {
    // const results = await DataStore.query(Restaurant);
    // setRestaurants(results);
    DataStore.query(Restaurant).then(setRestaurants);
    }, []);
  return (
    <View style={styles.page}>
      <FlatList
        data = {restaurants}
        renderItem = {({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {

    padding: 10,
  }
});