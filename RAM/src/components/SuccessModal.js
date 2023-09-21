import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const SuccessModal = ({ isVisible, message, onClose }) => {
  return (
    <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.successContainer}>
        <View style={styles.iconContainer}>
          <Icon name="check-circle" size={60} color="#32CD32" />
        </View>
        <Text style={styles.successText}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal> 
  );
};

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 15,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 10,
    textAlign: 'center'
  },
  dismissButton: {
    backgroundColor: '#32CD32', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  dismissButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessModal;
