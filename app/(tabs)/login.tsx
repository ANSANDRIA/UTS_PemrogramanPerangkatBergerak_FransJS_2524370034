import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Back</Text>

        <View style={styles.card}>
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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Link href="/forgot-password" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Create New Account
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 42,
    color: '#ffffff',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 48,
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