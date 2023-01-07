import React from 'react';
import { Image, Text, View } from 'react-native';
import { useAppSelector } from '../../hooks';

export const UserDetail = ({ route }: any) => {
  const { userId } = route.params;
  const users = useAppSelector(state => state.usersState.users);

  const userSelected = users.find((user: any) => user.id === userId);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'burlywood',
        padding: 8,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Image
          source={{ uri: userSelected.image }}
          style={{ width: 200, height: 200 }}
        />
        <Text>{userSelected.firstName}</Text>
        <Text>{userSelected.lastName}</Text>
        <Text>{userSelected.age}</Text>
        <Text>{JSON.stringify(userSelected.company)}</Text>
      </View>
    </View>
  );
};
