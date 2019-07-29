import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';




export default class Line extends React.Component{

    render () {
        return (

            <View style={styles.container}>

                <View style={styles.line}>

                </View>

                <Text>
                    JUL 2019
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

    line: {
        width: 120,
        height: 1,
        backgroundColor: '#707070'
    }


});
