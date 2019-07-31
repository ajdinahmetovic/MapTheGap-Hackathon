import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Search from "../common/Search";
import CategoryBox from "./components/CategoryBox";
import {connect} from "react-redux";
import Chart from "./components/Chart";



const mapStateToProps = (state) => {
    return {

        categories: state.categories

    };
};

class Home extends React.Component{

    static navigationOptions = {
        header: null,


    };

    render () {
        return (
            <View style={styles.container}>
                <Search/>



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
        if(item.item.id === -1){


            return (

                <View>
                    <Text style={styles.title}>
                        MOST DISCUSSED
                        LAST MONTH
                    </Text>
                    <View style={styles.chartView}>

                        <Chart/>

                    </View>

                    <Text style={styles.title}>
                        SELECT CATEGORY
                    </Text>
                </View>


            )


        } else {
            return (<CategoryBox item={item.item}/>)
        }
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
    },

    chartView: {
        width: '100%',
        height: 300
    }
});
