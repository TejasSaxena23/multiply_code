import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ToastAndroid,
  Dimensions,
  LayoutAnimation,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import TobeUsedSvg from './Svg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = () => {
    if (username === 'essay' && password === 'essay') {
      showToast('Welcome!');
      // Navigate to OfferPage when login is successful
      navigation.navigate('OfferPage');
    } else {
      showToast('Login failed. Please check your username and password.');
    }
  };

  const startLoginAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    handleLogin();
  };

  const iconColorUsername = isUsernameFocused ? '#006400' : 'gray';
  const iconColorPassword = isPasswordFocused ? '#006400' : 'gray';

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsUsernameFocused(false);
        setIsPasswordFocused(false);
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <TobeUsedSvg />
        <View style={styles.containerParent}>
          <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <View
              style={[
                styles.inputContainer,
                { borderBottomColor: isUsernameFocused ? '#006400' : 'gray' },
              ]}
            >
              <FontAwesome
                name="user"
                size={24}
                style={[styles.inputIcon, { color: iconColorUsername }]}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                onFocus={() => setIsUsernameFocused(true)}
                onBlur={() => setIsUsernameFocused(false)}
                value={username}
              />
            </View>
            <View
              style={[
                styles.inputContainer,
                { borderBottomColor: isPasswordFocused ? '#006400' : 'gray' },
              ]}
            >
              <FontAwesome
                name="lock"
                size={24}
                style={[styles.inputIcon, { color: iconColorPassword }]}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                value={password}
                secureTextEntry
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginButtonContainer}
                onPress={startLoginAnimation}
              >
                <FontAwesome
                  name="arrow-right"
                  size={24}
                  style={styles.buttonIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
          <Text style={styles.text}>
            Don't have an account? <Text style={styles.textspan}>Sign UP!</Text>
          </Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:50,
  },
 
  containerParent: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '75%',
    borderRadius: 40,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    width: '75%',
    maxHeight: windowHeight / 1.7,
    position: 'relative',
    marginTop: 70,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    position: 'relative',
    right: 80,
    top: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  inputIcon: {
    marginRight: 8,
    marginTop: 25,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginTop: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: -20,
  },
  loginButtonContainer: {
    backgroundColor: '#006400',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonIcon: {
    color: 'white',
  },
  forgotPassword: {
    fontSize: 16,
    color: 'blue',
    marginTop: 28,
    position: 'relative',
  },
  text: {
    marginTop: 40,
    color: 'gray',
    fontSize: 16,
  },
  textspan: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginPage;
