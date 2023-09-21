import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomModal = ({ isVisible, message, onClose }) => {
  return (
    <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.alertContainer}> 
        <View style={styles.iconContainer}>
          <Icon name="times-circle" size={60} color="#FF5B5B" />
        </View>
        <Text style={styles.alertText}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    alertContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      iconContainer: {
        marginBottom: 15,
      },
      alertText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:'center'
      },
      dismissButton: {
        backgroundColor: '#FF5B5B',
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

export default CustomModal;
