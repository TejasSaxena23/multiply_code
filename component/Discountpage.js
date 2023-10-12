import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Animated, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; // Added for green tick icon
const DiscountApprovalPage = () => {
  const navigation = useNavigation();

  const [discounts, setDiscounts] = useState([
    { id: '1', title: 'Discount 1', details: 'Details of Discount 1', approved: false },
    { id: '2', title: 'Discount 2', details: 'Details of Discount 2', approved: false },
    { id: '3', title: 'Discount 3', details: 'Details of Discount 3', approved: false },
    { id: '4', title: 'Discount 4', details: 'Details of Discount 4', approved: false },
    { id: '5', title: 'Discount 5', details: 'Details of Discount 5', approved: false },
  ]);

  const [searchText, setSearchText] = useState('');
  const [filteredDiscounts, setFilteredDiscounts] = useState(discounts);

  const [showSuccess, setShowSuccess] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000); // 10 seconds
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess]);

  const handleApprove = (id) => {
    // Filter out the approved discount
    const updatedDiscounts = discounts.filter((item) => item.id !== id);
    setDiscounts(updatedDiscounts);
    // Also update the filtered discounts
    setFilteredDiscounts(updatedDiscounts);
    // Show the success message
    setShowSuccess(true);

    // Animate the success message
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500, // 500 milliseconds
      useNativeDriver: false,
    }).start();
  };

  const handleReject = (id) => {
    // Handle rejection logic for the discount with the given id
    // For example, you can send a request to an API to update the rejection status
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = discounts.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDiscounts(filtered);
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredDiscounts(discounts);
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);

    // Reset the animation value
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500, // 500 milliseconds
      useNativeDriver: false,
    }).start();
  };

  const successMessageStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-50, 0],
        }),
      },
    ],
  };
  const popupContainerStyle = {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  };

  const popupStyle = {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const popupText = {
    flex: 1,
  };
  const renderItem = ({ item }) => (
    <View style={styles.discountItem}>
      <View style={styles.itemHeader}>
        <Text style={styles.discountTitle}>{item.title}</Text>
      </View>
      <View style={styles.expandedDetails}>
        <Text style={styles.detailsText}>{item.details}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.approveButton]}
            onPress={() => handleApprove(item.id)}
          >
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={[styles.button, styles.rejectButton]}
            onPress={() => handleReject(item.id)}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Navigation bar */}
      <View style={styles.header}>
        <Text style={styles.logo}>Your Logo</Text>
        <FontAwesome
          name="arrow-left"
          size={24}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* Shiny black background */}
      <View style={styles.shinyBackground}></View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor="#616161"
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText !== '' && (
          <TouchableOpacity onPress={clearSearch}>
            <FontAwesome name="times-circle" size={20} color="#616161" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      {/* Discount List */}
      <View style={styles.discountList}>
        <FlatList
          data={filteredDiscounts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.discountListContent}
        />
      </View>

      {/* Success Message Popup */}
      {showSuccess && (
        <View style={popupContainerStyle}>
          <View style={popupStyle}>
            <Ionicons name="md-checkmark-circle" size={24} color="green" style={styles.successIcon} />
            <Text style={popupText}>Discount Approved!</Text>
            <TouchableOpacity onPress={closeSuccessMessage} style={styles.closeButton}>
              <FontAwesome name="times" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  backIcon: {
    color: 'white',
    fontSize: 24,
  },
  shinyBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80, // Height of the shiny background
    backgroundColor: 'black',
    opacity: 0.3, // Adjust opacity as needed
    zIndex: -1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  clearIcon: {
    right: 0,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#616161',
  },
  discountList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  discountListContent: {
    paddingTop: 20,
    alignItems: 'center',
  },
  discountItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    width: '100%',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discountTitle: {
    fontSize: 16,
  },
  caretIcon: {
    marginLeft: 10,
  },
  expandedDetails: {
    marginTop: 10,
  },
  detailsText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  approveButton: {
    backgroundColor: 'green',
  },
  rejectButton: {
    backgroundColor: 'red',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#ccc',
  },
  popupContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  },
  popup: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popupText: {
    flex: 1,
  },
  closeButton: {
    marginLeft: 10,
  },
  successIcon: {
    marginRight: 10,
  },
});

export default DiscountApprovalPage;