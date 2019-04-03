import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DevicesScreen from '../screens/Device/DeviceScreen';
import SensorsScreen from '../screens/Sensor/SensorsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const DevicesStack = createStackNavigator({
  Devices: DevicesScreen
})

DevicesStack.navigationOptions = {
  tabBarLabel: 'Manage Devices',
  tabBarIcon: ({ focused }) => {
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
  }
}

const SensorsStack = createStackNavigator({
  Sensors: SensorsScreen
})

SensorsStack.navigationOptions = {
  tabBarLabel: 'Manage Sensors',
  tabBarIcon: ({ focused }) => {
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
  }
}

// SensorsStack.navigationOptions = {
//   tabBarLabel: 'Manage Sensors',
//   tabBarIcon: ({ focused }) => {
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//       />
//   }
// }

export default createBottomTabNavigator({
  HomeStack,
  DevicesStack,
  SensorsStack
});
