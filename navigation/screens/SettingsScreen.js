import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function AdvancedScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Paramètres</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Informations sur GeoPharma</Text>
        <Text style={styles.description}>
          GeoPharma est une application qui permet de trouver facilement les pharmacies à proximité.
        </Text>
        <Text style={styles.description}>
          Elle fournit des informations sur les pharmacies, les villes, les zones et bien plus encore.
        </Text>
        <Text style={styles.description}>N'hésitez pas à explorer les fonctionnalités de GeoPharma!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'green',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'green',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});
