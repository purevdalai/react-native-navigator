/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';

const AppNavigator = createStackNavigator({
  home: Home,
  dashboard: Dashboard
});

export default createAppContainer(AppNavigator);