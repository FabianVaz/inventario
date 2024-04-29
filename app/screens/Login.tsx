import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323844',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323844',
    width: '100%',
    padding: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '80%',
    margin: 8,
  },
});

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

function Login({ navigation }: LoginProps): React.ReactElement {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const btnIngresarOnPress = async function() {
    if (user && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Por favor ingresa usuario y contraseña.');
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text>Iniciar Sesión</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Usuario'
          placeholderTextColor='#888894'
          onChangeText={(u) => setUser(u)}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Contraseña'
          placeholderTextColor='#888894'
          secureTextEntry={true}
          onChangeText={(p) => setPassword(p)}
        />
        <Button title='Iniciar Sesión' onPress={btnIngresarOnPress} />
      </View>
    </SafeAreaView>
  );
}

export default Login;