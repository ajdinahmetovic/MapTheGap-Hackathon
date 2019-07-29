import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';




export default class Item extends React.Component{



    render () {
        return (
            <View style={styles.container}>

                <Image style={{borderTopLeftRadius: 27, width: 219, height: 151,  borderTopRightRadius: 27}} source={this.props.item.img}/>

                <View style={{height: 60, width: 219, alignItems: 'center', justifyContent: 'center'}}>

                    <Text style={styles.title}> {this.props.item.title} </Text>
                    <Text style={styles.cat}> {this.props.item.category} </Text>

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#fff',
        borderRadius: 27,
        width: 219,
        height: 250,
        marginLeft: 27,
    },

    title: {
        fontSize: 16,
        fontFamily: 'montserrat-bold',

    }

});
