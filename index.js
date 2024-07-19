/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Numlogin from './src/navigators/Stack/Numlogin';
import Login from './src/navigators/Stack/Login';
import App2 from './src/navigators/Stack/App2';
import Home from './src/navigators/BottomTab/Home';
import {name as appName} from './app.json';
import Therm from './src/navigators/BottomTab/Therm';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store=configureStore();
const RNRedux=()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);


// AppRegistry.registerComponent(appName, () => App);
// import { registerRootComponent } from 'expo';

// import App3 from './App3';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// registerRootComponent(App3);
