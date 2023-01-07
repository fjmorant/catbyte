import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { UserItem } from '../../components/user-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUsers } from '../../reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'burlywood',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export const UsersScreen = ({ navigation }: any) => {
  const users = useAppSelector(state => state.usersState.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        dispatch(setUsers(json.users));
      })
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  const renderItem = ({ item }: any) => (
    <UserItem
      key={item.id}
      imageUrl={item.image}
      age={item.age}
      name={item.lastName}
      onUserPress={() => {
        navigation.navigate('user-detail', { userId: item.id });
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
