import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Community = () => {
  return (
    <View style={styles.container}>
        <Link href="/notice" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Posts</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/notice" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Members</Text>
        </TouchableOpacity>
      </Link>
        <Link href="/notice" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notices</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/connect" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Posts</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Announcement" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Announcement</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default Community;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'powderblue',
    },
    button: {
      backgroundColor: 'white',
      padding: 15,
      margin: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  