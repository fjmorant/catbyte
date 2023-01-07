import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { UserItem } from '../../components/user-item';

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
  const [users, setUsers] = useState([]);

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
        setUsers(json.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }: any) => (
    <UserItem
      key={item.id}
      imageUrl={item.image}
      age={item.age}
      name={item.lastName}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('user-detail')}
      />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
