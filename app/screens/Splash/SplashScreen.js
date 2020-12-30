/**
 * Splash Screen
 */
import React , { useEffect } from 'react';
import { 
    View,
    Text, 
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './SplashScreenStyle';

const SplashScreen = ({navigation, route}) => {
    useEffect(() => {
        setTimeout( async() => {
           navigation.replace('HomeScreen')
        }, 2000);
      }, []);
    

    return (
        <View style={styles.container}>
            <Animatable.View useNativeDriver animation="bounceIn" duraton="1500" style={styles.header}>
                <Text style={styles.testStyle}>Test Project</Text>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

