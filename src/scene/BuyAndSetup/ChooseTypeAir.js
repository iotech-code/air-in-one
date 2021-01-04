import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native';
import { styles } from '../../styles/base';
import { defaultTheme } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux'
import Picker from 'react-native-picker';

const mapStateToProps = function (state) {
    return {
        setupOnlySelectProduct: state.setupOnlySelectProduct,
    }
}


const mapDispatchToProps = function (dispatch) {
    return {
        setInstallOnly: function (params) {
            dispatch({
                type: 'SETUP_ONLY_PRODUCT',
                payload: params
            })
        },
        dispatch: dispatch
    }
}

class ChooseBTU extends Component {

    state = {
        showNextButton: false,
        selectedBtu: 'default',
        selectedTypeAir: null
    };

    ListBtu = [
        { id: 1, value: '22800' },
        { id: 2, value: '18000' },
        { id: 3, value: '16000' },
        { id: 4, value: '12000' },
        { id: 5, value: '90000' }
    ]



    constructor(props) {
        super(props);
    }

    onSelectTypeAir(value) {
        this.setState({ selectedTypeAir: value })
    }

    onValueChange(value) {
        this.setState(() => {
            return {
                selectedBtu: value,
                showNextButton: true
            }
        })
    }

    openPicker() {
        Picker.init({
            pickerData: ['22800', '18000', '16000', '12000', '90000'],
            pickerTitleText: 'กรุณาเลือก BTU',
            onPickerCancel: data => { },
            onPickerSelect: data => { },
            onPickerConfirm: data => {
                this.onValueChange(data[0])
            }
        });
        Picker.show();
    }

    renderPickerItem() {
        return (
            this.ListBtu.map((item) => {
                return <Picker.Item color="#8E8E93" label={item.value} value={item.id} key={item.id} />
            })
        )
    }

    nextPage() {
        const { setInstallOnly } = this.props
        setInstallOnly(true)
        Actions.push('ConcludeSetupOnly')
    }

    render() {
        const { setupOnlySelectProduct } = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView style={{ marginTop: 10, flex: 1, paddingBottom: 20 }}>
                    <View style={{ ...styles.container }}>
                        <View style={[styles.flexRowBetween]}>

                            <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                                <Icon
                                    style={{ ...styles.iconStyleCircle }}
                                    name="chevron-left"
                                    size={defaultTheme.size.iconOnTop}
                                    onPress={() => Actions.push('ChooseBTU')}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                                <Icon
                                    style={{ ...styles.iconStyleCircle }}
                                    name="home"
                                    size={defaultTheme.size.iconOnTop}
                                    onPress={() => Actions.push('MainScene')}
                                />
                            </TouchableOpacity>

                        </View>


                        <View style={[styles.mt_2, { marginBottom: 10 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>เลือกชนิดแอร์</Text>
                        </View>

                        <TouchableOpacity
                            style={[styles.mb_1, styleScoped.boxSelectTypeAir,
                            { padding: 15, backgroundColor: this.state.selectedTypeAir == 1 ? defaultTheme.COLORS.PRIMARY : '#F7F7F7' }]}
                            onPress={() => this.onSelectTypeAir(1)}
                        >
                            <Text style={[{ textAlign: 'center', color: this.state.selectedTypeAir == 1 ? '#F7F7F7' : defaultTheme.COLORS.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }]}>Inverter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.mb_1, styleScoped.boxSelectTypeAir,
                            { padding: 15, backgroundColor: this.state.selectedTypeAir == 2 ? defaultTheme.COLORS.PRIMARY : '#F7F7F7' }]}
                            onPress={() => this.onSelectTypeAir(2)}
                        >
                            <Text style={[{ textAlign: 'center', color: this.state.selectedTypeAir == 2 ? '#F7F7F7' : defaultTheme.COLORS.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }]}>Non-Inverter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.mb_1, styleScoped.boxSelectTypeAir,
                            { padding: 15, backgroundColor: this.state.selectedTypeAir == 3 ? defaultTheme.COLORS.PRIMARY : '#F7F7F7' }]}
                            onPress={() => this.onSelectTypeAir(3)}
                        >
                            <Text style={[{ textAlign: 'center', color: this.state.selectedTypeAir == 3 ? '#F7F7F7' : defaultTheme.COLORS.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }]}>Inverter เเละ Non-Inverter</Text>
                        </TouchableOpacity>

                        <View style={[styles.mt_2, { marginBottom: 10 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>เลือก BTU ของแอร์</Text>
                        </View>

                        <TouchableOpacity style={{
                            borderRadius: 5,
                            width: '100%',
                            backgroundColor: 'white',
                            ...styles.shadowDefault,
                            padding: hp('1%'),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                            onPress={() => this.openPicker()}
                        >
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: '#8E8E93' }}>{this.state.selectedBtu == 'default' ? 'เลือก BTU ที่ต้องการ' : this.state.selectedBtu}</Text>
                            <Icon
                                style={{ color: '#8E8E93' }}
                                name="chevron-down"
                                size={defaultTheme.size.iconOnTop}
                            />
                            {/* <Picker /> */}
                            {/* <Picker style={{ width: '100%', height: 37 }} selectedValue={this.state.selectedBtu} onValueChange={(itemValue, itemIndex) => this.onValueChange(itemValue)}>
                                <Picker.Item color="#8E8E93" label="เลือก BTU ที่คุณต้องการ" value="default" />
                                {this.renderPickerItem()}
                            </Picker> */}
                        </TouchableOpacity>





                    </View>





                </ScrollView>
                <View style={{ ...styles.container }}>
                    {this.state.showNextButton ? this.renderNextButton() : null}

                </View>
            </SafeAreaView>
        );
    }

    renderNextButton() {
        return (
            <TouchableOpacity style={{ ...styleScoped.nextButton, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginBottom:hp('1.5%')}} onPress={() => this.nextPage()}>
                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>ถัดไป</Text>
                <Icon name="chevron-right" size={hp('2.5%')} style={{ color: 'white' }} />
            </TouchableOpacity>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseBTU)



var styleScoped = StyleSheet.create({
    nextButton: {
        width: '100%',
        padding: hp('1%'),
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        borderRadius: 5,
    },
    boxChooseTypeAndBtu: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        ...styles.shadowDefault,
    },
    textTitleChooseTypeAndBtu: {
        fontSize: 16,
        marginTop: 3,
        textAlignVertical: 'center',
    },
    iconChooseTypeAndBtu: {
        marginRight: 10,
        alignSelf: 'center',
        marginTop: 5,
    },
    boxFindProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#CED2D4',
    },
    textTitleFindProduct: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        color: defaultTheme.FONT.FONT_GREY,
        fontSize: 16,
    },
    iconFindProduct: {
        color: defaultTheme.FONT.FONT_GREY,
    },
    boxProdductSelected: {
        height: 110,
        padding: 10,
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        borderRadius: 5,
        borderColor: defaultTheme.COLORS.PRIMARY,
        marginVertical: 20
    },
    boxSelectTypeAir: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    nextButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#6CC3ED',
        borderRadius: 5,
    },
});
