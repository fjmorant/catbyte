import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { UserDetail } from './screens/user-detail';

import { UsersScreen } from './screens/users';
import { store } from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="users"
            component={UsersScreen}
            options={{ title: 'Users' }}
          />
          <Stack.Screen
            name="user-detail"
            component={UserDetail}
            options={{ title: 'User' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
