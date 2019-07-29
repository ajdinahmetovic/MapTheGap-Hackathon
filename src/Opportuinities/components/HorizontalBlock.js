import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Item from "./Item";




export default class HorizontalBlock extends React.Component{



    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.list.title}
                </Text>

                <ScrollView
                        showsHorizontalScrollIndicator={false}
                        style={{height: 300}} horizontal={true}>

                    {this.renderProjects(this.props.list.data)}

                </ScrollView>


            </View>
        );
    }

    renderProjects (data) {

        return data.map((item) => {
            return (
                <Item item={item}/>
            )
        })

    }
}

const styles = StyleSheet.create({
    container: {
        height: 340,
        width: '100%',
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        marginTop: 31,
        marginLeft: 35
    }
});
