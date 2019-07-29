import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';




export default class Line extends React.Component{

    render () {
        return (

            <View style={styles.container}>

                <View style={styles.line}>

                </View>

                <Text style={styles.txt}>
                    COMMENTS REVIEW
                </Text>

                <View style={styles.line}>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 15,
        height: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {

        fontFamily: 'montserrat',
        fontSize: 15,
        marginRight: 10,
        marginLeft: 10


    },

    line: {
        width: 70,
        height: 1,
        backgroundColor: '#707070'
    }


});
