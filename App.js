import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { Linking } from 'react-native';
import { useState } from 'react';
import Installation from './screens/Installation';
import { COLORS } from './global';

export default function App() {
  sendWhatsApp = (msg) => {
    let url = "whatsapp://send?text=" + msg;
    Linking.openURL(url)
      .then(data => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Stelle sicher, dass Whatsapp installiert ist");
      });
  }

  return (
    <View style={styles.container}>
      <Installation sendFunc={sendWhatsApp}></Installation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: COLORS.background
  },
});
