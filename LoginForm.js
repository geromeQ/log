import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    console.log('Logged in with:', { username, password });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {!isAuthenticated ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
          <Button
            title="Register"
            onPress={() => navigation.navigate('Register')}
          />
          <View style={styles.space} />
        </View>
      ) : (
        <View>
          <Text>User is logged in!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#007bff',
  },
  space: {
    height: 20,
  },
});

export default LoginScreen;
