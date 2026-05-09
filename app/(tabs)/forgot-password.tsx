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

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lupa</Text>
        <Text style={styles.title}>Password?</Text>

        <Text style={styles.description}>
          Masukkan alamat email Anda di bawah ini dan kami akan mengirimkan
          link untuk mengatur ulang password Anda.
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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Kirim Link Reset
            </Text>
          </TouchableOpacity>

          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.backText}>
                Kembali ke Login
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
    marginBottom: 30,
  },

  button: {
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

  backText: {
    marginTop: 25,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
  },
});