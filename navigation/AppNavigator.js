import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import NewDeviceScreen from '../screens/Device/NewDeviceScreen'
import NewSensorScreen from '../screens/Sensor/NewSensorScreen'

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  NewDeviceScreen: {screen: NewDeviceScreen},
  NewSensorScreen: {screen: NewSensorScreen},
  Main: MainTabNavigator,
}));