import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// import Login from './src/app/Authen/Login';
// import AuthenStack from './src/app/Authen/AuthenStack';

import AppNavigation from './src/app/AppNavigation';
// import { AppProvider } from './src/app/AppContext';
import MainStackNavigation from './src/app/main/MainTabsNavigation';

import store from './src/redux/Store';
import { Provider } from 'react-redux';
import Test from './src/app/main/Authen/Test';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>

        <StatusBar translucent backgroundColor={"rgba(0,0,0,0)"} />
        <AppNavigation />

      </SafeAreaView>
    </Provider>

  );
}
export default App;

