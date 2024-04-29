import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Product} from './models/Products';
import {RootStackParamList} from '../../App';


type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenProps;
  route: HomeScreenRoute;
};

function Home({navigation}: HomeProps): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const productItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={style.productItem}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column', flexGrow: 9}}>
          <Text style={style.itemTitle}>{item.nombre}</Text>
          <Text style={style.itemDetails}>
            Precio: ${item.precio.toFixed(2)}{' '}
          </Text>
        </View>
        <Text
          style={[
            style.itemBadge,
            item.currentStock < item.minStock ? style.itemBadge : null,
          ]}>
          {item.currentStock}
        </Text>
      </View>
    </TouchableOpacity>
  );
  useEffect(() => {
    setProducts([
      {
        id: 1,
        nombre: 'Martillo',
        precio: 80,
        minStock: 5,
        currentStock: 2,
        maxStock: 20,
      },
      {
        id: 2,
        nombre: 'Manguera (metro)',
        precio: 15,
        minStock: 50,
        currentStock: 200,
        maxStock: 100,
      },
    ]);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={productItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  productItem: {
    padding: 12,
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  itemDetails: {
    fontSize: 14,
    opacity: 0.7,
  },
  itemBadge: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default Home;