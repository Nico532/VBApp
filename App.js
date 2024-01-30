import { StyleSheet, View, StatusBar, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Linking } from 'react-native';
import { useState } from 'react';
import Installation from './screens/Installation';
import Reparatur from './screens/Reparatur';
import { COLORS } from './global';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

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
      <StatusBar />
      <NavigationContainer>

        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
          <Tab.Screen
            name="Installation"
            options={{
              tabBarLabelStyle: {
                fontSize: 13,
              },
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="solar-panel" color={color} size={size} />)
            }}
            children={() => <ScrollView style={{ flex: 1 }}><Installation sendFunc={sendWhatsApp}
            /></ScrollView>} />
          <Tab.Screen
            name="Reparatur"
            options={{
              tabBarLabelStyle: {
                fontSize: 13,
              },
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="wrench" color={color} size={size} />)
            }}
            children={() => <ScrollView style={{ flex: 1 }}><Reparatur sendFunc={sendWhatsApp}></Reparatur></ScrollView>}
          >

          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>

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
