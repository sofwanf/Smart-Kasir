import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const products = [
  { id: '1', name: 'Produk A', price: 20000 },
  { id: '2', name: 'Produk B', price: 30000 },
  { id: '3', name: 'Produk C', price: 15000 },
];

export default function App() {
  const [cart, setCart] = useState([]);
  
  // Tambahkan item ke keranjang
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplikasi Kasir</Text>

      {/* Daftar Produk */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Rp {item.price}</Text>
            <Button title="Tambah ke Keranjang" onPress={() => addToCart(item)} />
          </View>
        )}
      />

      {/* Tampilkan Keranjang */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => console.log("Keranjang:", cart)}
      >
        <Text style={styles.cartButtonText}>Lihat Keranjang ({cart.length} Item)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 8,
  },
  cartButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});