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
        <Text style={styles.title}>Selamat</Text>
        <Text style={styles.title}>Datang</Text>

        <Text style={styles.description}>
          Silakan login untuk melanjutkan ke aplikasi.
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Alamat Email</Text>

          <TextInput
            style={styles.input}
            placeholder="contoh@email.com"
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
            <Text style={styles.buttonText}>MASUK</Text>
          </TouchableOpacity>

          <Link href="/forgot-password" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Lupa Password?
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Belum punya akun? Daftar
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
    backgroundColor: '#000000',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 42,
    fontWeight: '300',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 50,
  },

  description: {
    marginTop: 25,
    fontSize: 15,
    color: '#cccccc',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  formContainer: {
    marginTop: 45,
  },

  label: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 8,
    marginLeft: 3,
  },

  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    color: '#333',
    marginBottom: 22,
  },

  button: {
    marginTop: 15,
    height: 58,
    backgroundColor: '#a20000',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
  },
});