import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {connect} from "react-redux";
import {selectCategory} from "../../../redux/app-redux";
import { withNavigation } from 'react-navigation';


const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: (item) => {dispatch(selectCategory(item))},
    };
};


class CategoryBox extends React.Component{

    render () {
        return (

            <TouchableOpacity onPress={() => this.category()} style={[styles.container, {backgroundColor: this.props.item.color}]}>

                <Image style={styles.img} source={this.props.item.img}/>

                <Text style={styles.title}>{this.props.item.title}</Text>

            </TouchableOpacity>
        );
    }

    category () {
        this.props.selectCategory(this.props.item);
        this.props.navigation.navigate('MoreCategories')
    }

}

export default withNavigation(connect(null, mapDispatchToProps)(CategoryBox));


const styles = StyleSheet.create({

    container: {
        width: '45%',
        height: 211,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2.5%',
    },

    img: {
    },

    title: {
        margin: 15,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        fontFamily: 'montserrat-bold'
    }

});
