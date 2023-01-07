import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addUser } from '../../reducers';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export const NewUser = ({ navigation }: any) => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [image, setImage] = useState('https://reactjs.org/logo-og.png');
  const [age, setAge] = useState('');
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setFirstname}
        value={firstName}
        placeholder={'First Name'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastname}
        value={lastName}
        placeholder={'Last Name'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setImage}
        value={image}
        placeholder={'Image'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAge}
        value={age}
        placeholder={'Age'}
      />

      <Button
        title={'Submit'}
        onPress={() => {
          dispatch(
            addUser({
              firstName,
              lastName,
              image,
              age,
            }),
          );

          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
