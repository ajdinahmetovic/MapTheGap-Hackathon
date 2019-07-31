import React from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts'




export default class Chart extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            selectedSlice: {
                label: 'TRANSPORT',
                value: 40
            },
            labelWidth: 0
        }
    }
    render() {
        const { labelWidth, selectedSlice } = this.state;
        const { label, value } = selectedSlice;
        const keys = ['TRANSPORT', 'HEALTH', 'EDUCATION'];
        const values = [40, 35, 35];
        const colors = ['#5C3BCA', '#CA3B3B', '#CA3B91', '#d966ff', '#ecb3ff']
        const data = keys.map((key, index) => {
            return {
                key,
                value: values[index],
                svg: { fill: colors[index] },
                arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
                onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
            }
        })
        const deviceWidth = Dimensions.get('window').width

        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <PieChart
                    style={{ height: 230, marginLeft: -110}}
                    outerRadius={'85%'}
                    innerRadius={'35%'}
                    data={data}
                />

                <View style={styles.label}>
                    <Text style={styles.head}>{label}</Text>
                    <Text  style={styles.head}>{value + '%'}</Text>


                </View>

            </View>
        )
    }

    /*


        <Text
                    onLayout={({ nativeEvent: { layout: { width } } }) => {
                        this.setState({ labelWidth: width });
                    }}
                    style={{
                        position: 'absolute',
                        left: deviceWidth / 2 + 180 ,
                        textAlign: 'center'
                    }}>
                    {`${label} \n ${value}`}
                </Text>


     */
}

const styles = StyleSheet.create({

    label: {
        position: 'absolute',
        right: 12,
        flexDirection: 'column',
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    head: {
        fontFamily: 'montserrat-semi-bold',

    }


});
