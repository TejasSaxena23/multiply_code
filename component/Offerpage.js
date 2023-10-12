import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const OfferPage = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Menu');
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToDiscountPage = () => {
    navigation.navigate('DiscountApprovalPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Your Logo</Text>
        <Picker
          selectedValue={selectedOption}
          style={styles.dropdown}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </View>
      <View style={styles.gridContainer}>
        {/* Discount Component */}
        <TouchableOpacity
          style={styles.gridItem}
          onPress={navigateToDiscountPage}
        >
          <FontAwesome name="money" size={40} style={styles.optionIcon} />
          <Text style={styles.optionText}>Discount</Text>
          <Animatable.View animation="slideInRight">
            <FontAwesome name="angle-right" size={30} style={styles.arrowIcon} />
          </Animatable.View>
        </TouchableOpacity>

        {/* Refund Component */}
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('RefundPage')}
        >
          <FontAwesome name="retweet" size={40} style={styles.optionIcon} />
          <Text style={styles.optionText}>Refund</Text>
          <Animatable.View animation="slideInRight">
            <FontAwesome name="angle-right" size={30} style={styles.arrowIcon} />
          </Animatable.View>
        </TouchableOpacity>

        {/* PO Component */}
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('POPage')}
        >
          <FontAwesome name="shopping-cart" size={40} style={styles.optionIcon} />
          <Text style={styles.optionText}>PO</Text>
          <Animatable.View animation="slideInRight">
            <FontAwesome name="angle-right" size={30} style={styles.arrowIcon} />
          </Animatable.View>
        </TouchableOpacity>

        {/* GRN Component */}
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('GRNPage')}
        >
          <FontAwesome name="check-square" size={40} style={styles.optionIcon} />
          <Text style={styles.optionText}>GRN</Text>
          <Animatable.View animation="slideInRight">
            <FontAwesome name="angle-right" size={30} style={styles.arrowIcon} />
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    height: 80,
    backgroundColor: '#006400',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropdown: {
    width: 120,
    color: 'white',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 60, // Reduce the marginTop
  },
  gridItem: {
    width: '48%',
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    flexDirection: 'row',
    marginBottom: 40, // Add marginBottom for even spacing
  },
  optionIcon: {
    fontSize: 40,
    color: '#006400',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006400',
  },
  arrowIcon: {
    fontSize: 30,
    color: '#006400',
  },
});

export default OfferPage;
