import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';




export default class HorizontalBlock extends React.Component{

    render () {
        return (
            <View style={styles.container}>


                <Image style={{width: 54, height: 43}} source={this.props.item.icon}/>

                <Text style={styles.notifTxt}>
                    {this.props.item.txt}
                </Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        margin: 10,
        width: 311,
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    notifTxt: {
        color: '#707070',
        fontFamily: 'montserrat',
        marginLeft: 5,

    }

});
