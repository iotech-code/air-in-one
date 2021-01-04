import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../../styles/base'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../../constants';

import Slider from '@react-native-community/slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        height: state.calculateBtu.height,
        width: state.calculateBtu.width,
        long: state.calculateBtu.long,
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setHeight: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ROOM_HEIGHT',
                payload: params
            })
        },
        setWidth: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ROOM_WIDTH',
                payload: params
            })
        },
        setLong: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ROOM_LONG',
                payload: params
            })
        },
        dispatch: dispatch
    }
}

class SpecifyRoom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            asset: null,
            type: null,
            room: null
        }
    }

    render() {
        const { height, width, long, setHeight, setWidth, setLong } = this.props
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView >


                    <View style={[styles.container, styles.mt_1, { marginBottom: 20 }]}>

                        <View style={[styles.flexRowBetween]}>

                            <TouchableOpacity onPress={() => Actions.push('CalculateBtu')} style={{ ...styles.boxIconCircle }}>
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                            </TouchableOpacity>


                            {/* <TouchableOpacity >
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={26} onPress={() => Actions.push('CalculateBtu')} />
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Icon style={styles.iconStyleCircle} name="home" size={26} onPress={() => Actions.push('MainScene')} />
                            </TouchableOpacity> */}
                        </View>
                        <View style={[styles.mt_2, { marginBottom: 10 }]}>
                            <Text style={styleScoped.textTitle}>ระบุขนาดห้องของคุณ</Text>
                        </View>
                        <View style={{ ...styles.mb_1, width: '100%' }}>
                            <Image source={require('../../../assets/images/Group4963.png')} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>ความกว้าง</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ ...styleScoped.textCountMatter }}>{width}</Text>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlignVertical: 'center', fontSize:hp('1.8%') }}>เมตร</Text>
                                </View>
                            </View>


                            <Slider
                                style={{ width: '100%', height: 40 }}
                                minimumValue={0}
                                maximumValue={20}
                                minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                thumbTintColor={defaultTheme.COLORS.PRIMARY}
                                value={width}
                                onSlidingComplete={(value) => setWidth(value)}
                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>ความยาว</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ ...styleScoped.textCountMatter }}>{long}</Text>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlignVertical: 'center', fontSize:hp('1.8%') }}>เมตร</Text>
                                </View>
                            </View>

                            <Slider
                                style={{ width: '100%', height: 40 }}
                                minimumValue={0}
                                maximumValue={20}
                                minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                thumbTintColor={defaultTheme.COLORS.PRIMARY}
                                value={long}
                                onSlidingComplete={(value) => setLong(value)}
                            />
                        </View>



                        <View style={{ marginTop: 20 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>ความสูง</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ ...styleScoped.textCountMatter }}>{height}</Text>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlignVertical: 'center', fontSize:hp('1.8%') }}>เมตร</Text>
                                </View>
                            </View>

                            <Slider
                                style={{ width: '100%', height: 40 }}
                                minimumValue={0}
                                maximumValue={20}
                                minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                thumbTintColor={defaultTheme.COLORS.PRIMARY}
                                value={height}
                                onSlidingComplete={(value) => setHeight(value)}
                            />
                        </View>

                        {this.renderNextButton()}

                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }

    renderNextButton() {
        return (
            <TouchableOpacity style={[styleScoped.nextButton, styles.flexRowCenter, { marginTop: hp('9%') }]} onPress={() => { Actions.push('RoomInfo') }}>
                <Text style={{ color: 'white', marginRight: 2 ,fontFamily:defaultTheme.FONT.FONT_FAMILY,fontSize:hp('1.5%') }}>ถัดไป</Text>
                <Icon name="chevron-right" size={hp('2%')} style={[styles.fontBold, { color: 'white', marginTop: 1 }]} />
            </TouchableOpacity>
        )
    }




}

export default connect(mapStateToProps, mapDispatchToProps)(SpecifyRoom)

const styleScoped = StyleSheet.create({
    textTitle: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontSize: hp('2%')
    },
    textCountMatter: {
        marginRight: 10,
        padding: 2,
        borderWidth: 1,
        borderRadius: 10,
        width: 50,
        textAlign: 'center',
        borderColor: defaultTheme.COLORS.PRIMARY,
        fontWeight: 'bold',
        color: defaultTheme.FONT.PRIMARY
    },
    nextButton: {
        width: '100%',
        padding: hp('2%'),
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        borderRadius: 5,
        alignItems:'center'
    },

})