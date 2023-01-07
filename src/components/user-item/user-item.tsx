import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
  subContainer: { flexDirection: 'row', backgroundColor: 'white' },
});

export const UserItem = ({
  imageUrl,
  name,
  age,
  onUserPress,
}: {
  imageUrl: string;
  name: string;
  age: number;
  onUserPress: () => void;
}) => {
  return (
    <Pressable style={styles.container} onPress={onUserPress}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{age}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
