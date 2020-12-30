/**
 * Home Screen
 */
import React , { Component } from 'react';
import { 
    View, 
    Text,
    SafeAreaView,
    TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './HomeScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroid: '',
            asteroidData: null,
        }
    }

    onPressSubmitButton = async() => {
        try {
            let response = await fetch(
              `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroid}?api_key=3mUrfMUb3FmuJRh9NwhaK0zcMYw4WwAABFcKra2M`
            );
            let json = await response.json();
            this.setState({ asteroidData: json }, () => {
                if(json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('AsteroidListScreen', { asteroidData: this.state.asteroidData })
            })
            console.log('@@@ JSON ============', json);
          } catch (error) {
            console.log('@@@ Error ============', error);
            alert('Invalid Asteroid ID')
          }
    }

    onPressRandomButton = async() => {
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

                this.props.navigation.navigate('AsteroidDataListScreen', { asteroidList: this.state.asteroidList })
            })
            console.log('@@@ Random data JSON ============', json);
          } catch (error) {
            console.log('@@@ Error ============', error);
          }
    }
    
    renderInputForm = () => {
        return (
            <View style={styles.inputFormHeader}>
                <Animatable.Text animation='zoomInUp' style={styles.formText}>Search Asteroid</Animatable.Text>
                <Animatable.View animation='fadeInLeftBig'>
                <TextInput {...this.props}
                    style={styles.inputStyle}
                    placeholder={'Enter Asteroid ID'}
                    value={this.state.asteroid}
                    onChangeText={(value) => this.setState({ asteroid: value })}
                    autoCapitalize={false}
                />
                </Animatable.View>
                <Animatable.View animation='swing'>
                <TouchableOpacity disabled={this.state.asteroid.trim().length === 0} onPress={() => this.onPressSubmitButton()} style={[styles.submitButton, { backgroundColor: this.state.asteroid.trim().length === 0 ? 'grey' : 'green'}]}>
                    <Text style={[styles.submitText, { color: this.state.asteroid.trim().length === 0 ? '#000000' : '#ffffff'}]}>Submit</Text>
                </TouchableOpacity>
                </Animatable.View>
                <Animatable.View animation='tada'>
                <TouchableOpacity  onPress={() => this.onPressRandomButton()} style={[styles.submitButton, { backgroundColor:'green'}]}>
                    <Text style={[styles.submitText, { color: '#ffffff'}]}>Random Asteroid</Text>
                </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }
    
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.backgroundColor }]}>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        {this.renderInputForm()}
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
};

export default HomeScreen;

