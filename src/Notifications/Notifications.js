import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Notification from "./components/Notification";




export default class Notifications extends React.Component{

    constructor (props) {
        super (props);

        this.state = {
            notifs: [

                {
                    id: 0,
                    txt: 'Great job! Your post in category - public service is accepted. Thank you ...',
                    icon: require('./assets/zvonce.png')
                },

                {
                    id: 0,
                    txt: 'July report in which your comment took place was presented on ...',
                    icon: require('./assets/crkveno_zvono.png')
                },

                {
                    id: 0,
                    txt: 'NGO "Wings of Hope" is recruiting volunteers for their summer activity ...\n',
                    icon: require('./assets/crkveno_zvono.png')
                },


                {
                    id: 0,
                    txt: 'Great job! Your post in category -' +
                        'education is accepted. Thank you ...',
                    icon: require('./assets/zvonce.png')
                },

                {
                    id: 0,
                    txt: 'Youth exchange in Spain! Visit our opportunities.',
                    icon: require('./assets/crkveno_zvono.png')
                },



            ]
        }

    }

    render () {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>NOTIFICATIONS</Text>

                {this.renderNotifications(this.state.notifs)}

            </View>
        );
    }

    renderNotifications (data) {

        return data.map((item) => {
            return (
                <Notification item={item}/>
            )
        })

    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        marginTop: 34,
        marginBottom: 55,
    }
});
