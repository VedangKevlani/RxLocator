import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const Homepage: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.heroImage} 
        />
        <Text style={styles.title}>Welcome to Carib Choice Pharmacy</Text>
        <Text style={styles.subtitle}>Easily manage your prescriptions, check medication availability, and make payments — all in one app!</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Upload Prescription')}>
          <Text style={styles.buttonText}>Upload Prescription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Scan Prescription')}>
          <Text style={styles.buttonText}>Scan Prescription</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Carib Choice Pharmacy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#189f52',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  featuresSection: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#189f52',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    color: '#777',
    fontSize: 14,
  },
});

export default Homepage;
