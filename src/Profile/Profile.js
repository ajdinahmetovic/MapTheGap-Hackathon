import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Line from "../Home/components/Line";
import Notification from "../Notifications/components/Notification";




export default class Profile extends React.Component{


    constructor (props) {
        super(props);

        this.state = {
            notifs: [

                {
                    id: 0,
                    txt: 'Scholarships on European level - well done!',
                    icon: require('./assets/ico1.png')
                },

                {
                    id: 0,
                    txt: 'The river in Maribor is over polluted. We should try to clean it.',
                    icon: require('./assets/ico2.png')
                },

                {
                    id: 0,
                    txt: 'There is no running paths in the city. It would be nice if we have one.',
                    icon: require('./assets/ico3.png')
                },


                {
                    id: 0,
                    txt: 'More opportunities for the people with mental health problems',
                    icon: require('./assets/ico1.png')
                },



            ]
        }


    }


    render () {
        return (
            <View style={styles.container}>

                <Image style={{marginTop: 34, width: 266, height: 213}} source={require('./assets/profilePic.png')}/>

                <Text style={styles.name}> EMMETT CLARKSON </Text>

                <Image style={{width: 113, height: 20, marginBottom: 37}} source={require('./assets/info.png')}/>

                <Line />

                {this.renderReviews()}
            </View>
        );
    }

    renderReviews(){

        return this.state.notifs.map((notif) => {
            return(<Notification item={notif}/>)
        })

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    name: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        marginTop: 30,
    }
});
