
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';

import { styles } from '../styles/base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux';


export default class Button extends Component{

    constructor(props){


    }
    render(){
        return(
            <TouchableOpacity style={{...buttonStyle.nextButton}} >
                

            </TouchableOpacity>
        )
    }



}


const buttonStyle = StyleSheet.create({


    nextButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#6CC3ED',
        borderRadius: 5,
    },


})