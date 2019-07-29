import React from 'react';
import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
import {connect} from "react-redux";
import Comment from "./components/Comment";
import NewComment from "../common/NewComment";
import Line from "./components/Line";



const mapStateToProps = (state) => {
    return {
        discussion: state.underCategory.conversation
    };
};



 class Discussion extends React.Component{

     static navigationOptions = {
         title: 'Join discussion ! ',
     };
     constructor (props){
         super(props);


     }


    render () {
        return (

            <View style={{marginBottom: 90}}>



                <FlatList
                    style={styles.listStyle}
                    data={this.props.discussion}
                    extraData={this.props}
                    renderItem={this.renderComment}
                    numColumns={1}
                    initialScrollIndex={this.props.discussion.length - 1}
                    keyExtractor={(item, index) => index}
                />


                <NewComment />


            </View>
        );
    }

    renderComment = (comment) => {
         console.log(comment.item.id);

        if(comment.item.id === -1){

            return(<Line/>)


        } else {
            return (<Comment comment={comment.item.user}/>)

        }

    }
}
export default connect(mapStateToProps)(Discussion);

const styles = StyleSheet.create({

    container: {
        width: '90%',
        height: 50,
        borderRadius: 27,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '2.5%',
    },

    img: {
    },

    listStyle: {
        marginTop: 20
    },

    commentInput: {

        width: '90%',


    },

    title: {
        width: '90%',
        margin: 5,
        textAlign: 'left',
        marginTop: 10,
        fontSize: 18,
        color: 'black',
        fontFamily: 'montserrat-bold'
    },

    floatNum: {
        top: 32,
        position: 'absolute',
        height: 67,

        right: 0,
    }

});
