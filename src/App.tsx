import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './navigation/RootNavigator';
import {navigationTheme} from './navigation/theme';
import NotificationModuleInterface from './modules/notifications';

const App = () => {
  useEffect(() => {
    NotificationModuleInterface.showAppNotification('hello', 'siema ByczQ');
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
