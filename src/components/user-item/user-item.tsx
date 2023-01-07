import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    height: 200,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 3,
  },
});

export const UserItem = ({
  imageUrl,
  name,
  age,
}: {
  imageUrl: string;
  name: string;
  age: number;
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
        <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{age}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
