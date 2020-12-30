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
import styles from './AsteroidDataListStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

class AsteroidDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroidData: this.props.route.params.asteroidList,
            asteroidList: null,
        }
    }

    componentDidMount() {
        console.log('@@@ Navigation =========', this.state.asteroidData)
    }

    onPressSubmitButton = async() => {
        try {
            let response = await fetch(
              `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3mUrfMUb3FmuJRh9NwhaK0zcMYw4WwAABFcKra2M`
            );
            let json = await response.json();
            this.setState({ asteroidList: json.near_earth_objects }, () => {
                if(json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('AsteroidDataListScreen', { asteroidList: this.state.asteroidData })
            })
            console.log('@@@ Random data JSON ============', json);
          } catch (error) {
            console.log('@@@ Error ============', error);
          }
    }

    onPressAsteroid = (item) => {
        this.props.navigation.navigate('AsteroidDetailScreen', { asteroidDetail: item })
    }

    renderAsteroidCell = (item, index) => {
        return (
            <Animatable.View animation='zoomInDown'>
            <TouchableOpacity onPress={() => this.onPressAsteroid(item)} style={styles.asteroidListCell}>
                <View style={styles.leftView}>
                    <Text style={styles.fieldValue}>Name: {item.name}</Text>
                    <Text style={styles.fieldValue}>NASA IPL URL: {item.nasa_jpl_url}</Text>
                    <Text style={styles.fieldValue}>IS POTENTIAL HAZARDOUS ASTEROID: {item.is_potentially_hazardous_asteroid}</Text>
                </View>         
            </TouchableOpacity>
            </Animatable.View>
        )
    }
    
    renderasteroidList = () => {
        return (
            <View style={styles.asteroidListContainer}>
                <FlatList
                        data={this.state.asteroidData}
                        renderItem={({item, index}) => this.renderAsteroidCell(item, index)}
                        keyExtractor={(item) => item.id}
                        extraData={this.state}
                    />
            </View>
            
        )
    }
    
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.blue }]}>
                <View style={styles.container}>
                    {this.renderasteroidList()}
                </View>
            </SafeAreaView>
        );
    }
};

export default AsteroidDataList;

