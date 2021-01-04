import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default {
    COLORS: {
        DEFAULT: '#DCDCDC',
        PRIMARY: '#49C5F1',
        SECONDARY: '#F7F7F7',
        LIGHT_PRIMARY:'#DAF4FC',
        GREY:'#ACACAC',
        LABEL: '#FE2472',
        INFO: '#00BCD4',
        ERROR: '#F44336',
        SUCCESS: '#4CAF50',
        WARNING: '#FF9800',
        MUTED: '#979797',
        INPUT: '#DCDCDC',
        ACTIVE: '#9C26B0',
        BUTTON_COLOR: '#9C26B0',
        PLACEHOLDER: '#9FA5AA',
        SWITCH_ON: '#9C26B0',
        SWITCH_OFF: '#D4D9DD',
        GRADIENT_START: '#6B24AA',
        GRADIENT_END: '#AC2688',
        PRICE_COLOR: '#EAD5FB',
        BORDER_COLOR: '#E7E7E7',
        BLOCK: '#E7E7E7',
        CAPTION: '#4A4A4A',
    },
    FONT:{
        FONT_FAMILY:'Kanit',
        PRIMARY: '#49C5F1',
        FONT_GREY:'#8E8E93',
    },
    size:{
        font:hp('2%'), //default font size
        margin:hp('5%'),
        iconOnTop:hp('3.5%')

    }
};