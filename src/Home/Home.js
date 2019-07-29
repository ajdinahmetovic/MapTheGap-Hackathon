import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Search from "../common/Search";
import CategoryBox from "./components/CategoryBox";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {

        categories: state.categories

    };
};

class Home extends React.Component{

    static navigationOptions = {
        header: null
    };

    render () {
        return (
            <View style={styles.container}>
                <Search/>

                <Text style={styles.title}>
                    SELECT CATEGORY
                </Text>

                <FlatList
                    style={{padding: '2.5%'}}
                    data={this.props.categories}
                    extraData={this.props}
                    renderItem={this.renderCategory}
                    numColumns={2}
                    keyExtractor={(user, index) => index}

                />

            </View>
        );
    }


    renderCategory = (item) => {
        return(<CategoryBox item={item.item}/>)
    }

}

export default connect(mapStateToProps)(Home);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        marginTop: 31,
        marginLeft: 35
    }
});
