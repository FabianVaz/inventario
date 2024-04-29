import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Product} from './models/Products';
import { Route, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

export type Params = {
    product: Product;
    };

export type Props = {
  route : RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

function ProductDetails({route}: Props): React.JSX.Element {
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct(route.params.product);
    }, [route]);
    return (
        <SafeAreaView>
            <Text>{product?.nombre}</Text>
            <Text>{product?.precio}</Text>
            <Text>{product?.currentStock}</Text>
        </SafeAreaView>
    );
}

export default ProductDetails;