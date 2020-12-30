/**
 * Asteroid List Screen
 */
import React , { Component } from 'react';
import { 
    View, 
    Image,
    Text,
    SafeAreaView,
    TextInput,
    FlatList,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './AsteroidListStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

class AsteroidList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroidData: this.props.route.params.asteroidData,
            asteroidList: null,
        }
    }

    componentDidMount() {
        console.log('@@@ Navigation =========', this.state.asteroidData)
    }

    renderAsteroidCell = (item, index) => {
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid }  = this.state.asteroidData;
        return (
            <Animatable.View animation='swing' style={styles.asteroidContainer}>
            <TouchableOpacity style={styles.asteroidListCell}>
                <View style={styles.leftView}>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>NASA JPL URL: {nasa_jpl_url}</Text>
                    <Text style={styles.fieldValue}>IS POTENTIAL HAZARDOUS ASTEROID: {String(is_potentially_hazardous_asteroid)}</Text>
                </View>
            </TouchableOpacity>
            </Animatable.View>
        )
    }
    
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.white }]}>
                <View style={styles.container}>
                    {this.renderAsteroidCell()}
                </View>
            </SafeAreaView>
        );
    }
};

export default AsteroidList;

