// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [balance, setBalance] = useState(1500.00); // Example balance
  const [message, setMessage] = useState('');

  const handleSendMoney = () => {
    setMessage('Send Money feature coming soon!');
  };

  const handleAddMoney = () => {
    setMessage('Add Money feature coming soon!');
  };

  const handleViewTransactions = () => {
    setMessage('Transaction history feature coming soon!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My E-Wallet</Text>
      <Text style={styles.balanceText}>Balance: ${balance.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSendMoney}>
          <Text style={styles.buttonText}>Send Money</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
          <Text style={styles.buttonText}>Add Money</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleViewTransactions}>
          <Text style={styles.buttonText}>View Transactions</Text>
        </TouchableOpacity>
      </View>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

