import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { Link } from 'expo-router';

export default function Index() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcome}>Create Your</Text>
        <Text style={styles.title}>Pink Account</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Email Address</Text>

          <TextInput
            style={styles.input}
            placeholder="example@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="******"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Confirm Password</Text>

          <TextInput
            style={styles.input}
            placeholder="******"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/forgot-password" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },

  welcome: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
  },

  title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#ff69b4',
    textAlign: 'center',
    marginBottom: 40,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 25,
  },

  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ffc0cb',
    borderRadius: 15,
    paddingHorizontal: 18,
    fontSize: 16,
    backgroundColor: '#fff5f8',
    color: '#333',
  },

  button: {
    marginTop: 30,
    height: 58,
    backgroundColor: '#ff69b4',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },

  linkText: {
    marginTop: 18,
    textAlign: 'center',
    color: '#ff69b4',
    fontSize: 15,
    fontWeight: '600',
  },
});