import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';




export default class NewComment extends React.Component{


    render () {
        return (

            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={styles.container}>
                    <TextInput placeholder={'New Comment'} style={styles.inputStyle}/>
                    <TouchableOpacity>
                        <Image style={{width: 20, height: 20}} source={require('../../assets/checked.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 30,
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 27,
        borderColor: '#707070',
        alignItems: 'center',
        justifyContent: 'center'

    },

    inputStyle: {
        fontFamily: 'montserrat',
        width: '85%',
        height: 50,
        color: 'black'
    },

    icon: {
        width: '10%',
        height: 50,


    }
});
