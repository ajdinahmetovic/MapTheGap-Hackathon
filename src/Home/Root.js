import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryBox from "./components/CategoryBox";
import {connect} from "react-redux";
import MoreCategories from "./MoreCategories";
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Home from "./Home";
import Discussion from "./Discussion";



const Routes = createStackNavigator ({

    Home: {
        screen: Home
    },

    MoreCategories: {
        screen: MoreCategories
    },

    CategoryBox: {
        screen: CategoryBox
    },

    Discussion: {
        screen: Discussion
    }



});

let Navigation = createAppContainer(Routes);

export default class Root extends React.Component{



    render () {
        return (
            <Navigation/>
        );
    }



}



const styles = StyleSheet.create({

});
