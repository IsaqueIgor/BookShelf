import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  FlexibleTabBarComponent,
  withCustomStyle,
} from 'react-navigation-custom-bottom-tab-component/FlexibleTabBarComponent';

import ExploreScreen from '../../screens/Explore';
import FavouriteScreen from '../../screens/Favourite';
import MenuScreen from '../../screens/Menu';

const MenuStack = createStackNavigator({
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({focused}) => (
    <FontAwesome
      name="bars"
      focused={focused}
      size={30}
      style={{color: focused ? '#383838' : 'black'}}
    />
  ),
};

const ExploreStack = createStackNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({focused}) => (
    <FontAwesome
      name="rocket"
      focused={focused}
      size={30}
      style={{color: focused ? '#383838' : 'black'}}
    />
  ),
};

const FavouriteStack = createStackNavigator({
  Favourite: {
    screen: FavouriteScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

FavouriteStack.navigationOptions = {
  tabBarLabel: 'Favourite',
  tabBarIcon: ({focused}) => (
    <FontAwesome
      name="heart"
      focused={focused}
      size={30}
      style={{color: focused ? '#383838' : 'black'}}
    />
  ),
};

const Navigation = createBottomTabNavigator(
  {
    ExploreStack,
    FavouriteStack,
    MenuStack,
  },
  {
    tabBarComponent: withCustomStyle({
      defaultFlexValue: 1,
      activeFlexValue: 2,
      tabBarHeight: 80,
      style: {
        borderRadius: 16,
        backgroundColor: '#e3e3e3',
      },
      backgroundViewStyle: {
        backgroundColor: '#FFF',
        maxHeight: 56,
        marginTop: 12,
      },
    })(FlexibleTabBarComponent),
  },
);

const App = createAppContainer(Navigation);
export default App;
