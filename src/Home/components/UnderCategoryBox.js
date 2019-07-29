import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {selectUnderCategory} from "../../../redux/app-redux";
import {connect} from "react-redux";
import { withNavigation } from 'react-navigation';



const mapDispatchToProps = (dispatch) => {
    return {
        selectUnderCategory: (item) => {dispatch(selectUnderCategory(item))},
    };
};

class UnderCategoryBox extends React.Component{



    render () {
        return (

            <TouchableOpacity onPress={() => this.toDiscussion ()} style={styles.container}>
                <Text style={styles.title}>{this.props.item.title}</Text>


                <View style={styles.floatNum}>
                    <Text style={{color: 'black', fontFamily: 'montserrat-bold',}}>{this.props.item.count}</Text>
                </View>


            </TouchableOpacity>
        );
    }

    toDiscussion(){
        this.props.selectUnderCategory(this.props.item);
        this.props.navigation.navigate('Discussion');

    }
}

export default withNavigation(connect(null, mapDispatchToProps)(UnderCategoryBox));

const styles = StyleSheet.create({

    container: {
        width: '90%',
        height: 50,
        borderRadius: 27,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '2.5%',
    },

    img: {
    },

    title: {
        width: '90%',
        margin: 5,
        textAlign: 'left',
        marginTop: 10,
        fontSize: 18,
        color: 'black',
        fontFamily: 'montserrat-bold'
    },

    floatNum: {
        top: 32,
        position: 'absolute',
        height: 67,

        right: 0,
    }

});
