import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { UserDetail } from './screens/user-detail';

import { UsersScreen } from './screens/users';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;
