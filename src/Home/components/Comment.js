import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';




export default class Comment extends React.Component{

    render () {
        return (

            <View style={styles.container}>

                <View style={styles.user}>
                    <Image style={styles.avatar} source={this.props.comment.icon}/>
                </View>


                <View style={{height: 120 , width: 304-40, marginLeft: 15}}>
                    <Text style={styles.username}> {this.props.comment.name + ' ' + this.props.comment.timestamp}  </Text>
                    <Text style={{textAlign: 'left', fontFamily: 'montserrat', fontSize: 16, marginTop: 5, color: '#707070',}}> {this.props.comment.problem} </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        paddingLeft: 36,
        paddingRight: 36,
        flexDirection: 'row',
        width: 350,
        height: 120,
    },

    comment: {
        marginLeft: 5,
        marginTop: 5,

        height: 120

    },

    username: {
        fontFamily: 'montserrat-semi-bold',
        fontSize: 15,
        textAlign: 'left',
        color: 'black',

    },

    user: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 120,
    },


    avatar: {
        width: 38,
        height: 38
    }


});
