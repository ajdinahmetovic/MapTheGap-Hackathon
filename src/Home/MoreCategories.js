import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Search from "../common/Search";
import CategoryBox from "./components/CategoryBox";
import {connect} from "react-redux";
import UnderCategoryBox from "./components/UnderCategoryBox";



const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        selectedCategory: state.selectedCategory,
    };
};

class MoreCategories extends React.Component {

    static navigationOptions = {
        header: null
    };

    render () {
        return (
            <View style={styles.container}>

                <Search/>

                <View style={[styles.titleView, {backgroundColor: this.props.selectedCategory.color}]}>

                    <Image source={this.props.selectedCategory.img}/>
                    <Text style={styles.title}> {this.props.selectedCategory.title} </Text>
                </View>


                <FlatList
                    style={styles.listStyle}
                    data={this.props.selectedCategory.moreCategories}
                    extraData={this.props}
                    renderItem={this.renderCategory}
                    numColumns={1}
                    keyExtractor={(user, index) => index}
                />

                <Text style={{marginLeft: '80%', fontSize: 13, color: '#797979'}}> SEE ALL </Text>

            </View>
        );
    }


    renderCategory = (item) => {
        return(<UnderCategoryBox item={item.item}/>)
    }

}

export default connect(mapStateToProps)(MoreCategories);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },

    listStyle: {
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        color: 'white',
        marginLeft: 35
    },

    titleView: {
        flexDirection: 'row',
        marginTop: 30,
        width: '90%',
        height: 70,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CA3B3B',
    }

});
