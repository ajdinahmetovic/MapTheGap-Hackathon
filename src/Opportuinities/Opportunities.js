import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HorizontalBlock from "./components/HorizontalBlock";
import Search from "../common/Search";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        openApplications: state.openApplications,
        onGoing: state.onGoing,
        mostPopular: state.mostPopular
    };
};

class Opportunities extends React.Component{



    render () {
        return (
            <View style={styles.container}>

                <Search/>

                <ScrollView>
                    <HorizontalBlock list={this.props.openApplications}/>
                    <HorizontalBlock list={this.props.onGoing}/>
                    <HorizontalBlock list={this.props.mostPopular}/>

                </ScrollView>

            </View>
        );
    }
}

export default connect(mapStateToProps)(Opportunities);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
