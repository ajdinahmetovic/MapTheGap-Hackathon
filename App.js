import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from "./src/Home/Home";
import Opportunities from "./src/Opportuinities/Opportunities";
import DoneProjects from "./src/DoneProjects/DoneProjects";
import Profile from "./src/Profile/Profile";
import {Provider} from "react-redux";
import {store} from "./redux/app-redux";
import * as Font from 'expo-font';
import Root from "./src/Home/Root";
import Notifications from "./src/Notifications/Notifications";


const TabNavigator = createBottomTabNavigator ({

  Home: {
    screen: Root,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: () => (
          <Image source={require('./assets/categories.png')}/>
      )
    }
  },


      Opportunities: {
        screen: Opportunities,
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: () => (
              <Image source={require('./assets/opportunities.png')}/>
          )
        }
      },

      Notifications: {
        screen: Notifications,
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: () => (
              <Image style={{width: 39, height: 35}} source={require('./assets/notifications.png')}/>
          )
        }
      },

      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: '',
          tabBarIcon: () => (
              <Image source={require('./assets/user.png')}/>
          )
        }
      },

},
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#E0358E',
        inactiveTintColor: '#6D6C71',
        style:{
          backgroundColor: '#445DA0',
          height: 61,
          borderTopLeftRadius: 23,
          borderTopRightRadius: 23,

        },
      },
    }
);

let TabNav = createAppContainer(TabNavigator);

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isReady: false
    }
  }


  async componentDidMount() {
    await Expo.Font.loadAsync({
      'montserrat': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf'),
      'montserrat-thin': require('./assets/font/Montserrat-Thin.ttf'),
      'montserrat-semi-bold': require('./assets/font/Montserrat-SemiBold.ttf'),

    });

    this.setState({isReady:true})
  }


  render () {
    if (!this.state.isReady) {
      return (
          <View/>
      )
    }
    return (
        <Provider store={store}>
            <TabNav/>
        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
