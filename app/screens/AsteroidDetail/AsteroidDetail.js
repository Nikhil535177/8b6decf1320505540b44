/**
 * Asteroid Detail Screen
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    SafeAreaView,
    TextInput,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './AsteroidDetailStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

class AsteroidDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            showData: false,
        }
    }

    renderasteroidDetail = () => {
        console.log('@@@======',this.props.route.params.asteroidDetail)
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = this.props.route.params.asteroidDetail;
        return (
            <Animatable.View useNativeDriver animation="zoomIn" delay={300} style={styles.inputFormHeader}>
                <View style={styles.asteroidDetailContainer}>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>NASA JPL URL:: {nasa_jpl_url}</Text>
                    <Text style={styles.fieldValue}>IS POTENTIAL HAZARDOUS ASTEROID: {String(is_potentially_hazardous_asteroid)}</Text>
                </View>
            </Animatable.View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.black }]}>
                {this.renderasteroidDetail()}
            </SafeAreaView>
        );
    }
};

export default AsteroidDetail;

