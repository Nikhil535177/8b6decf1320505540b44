import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    inputFormHeader: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(200),
    },

    asteroidDetailContainer:{
        justifyContent: 'center',
        height: scale(200),
        backgroundColor: 'grey',
        paddingVertical: scale(10),
        borderRadius: scale(10),
        paddingRight: scale(10),
        marginHorizontal: scale(20)
    },

    submitButton: {
        marginTop: verticalScale(20),
        width: scale(200),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(20),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
    },

    fieldValue: {
        fontSize: scale(15),
        color: 'white',
        fontWeight: 'bold',
        marginLeft: scale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),
    },

    imageIcon: {
        marginTop: verticalScale(10),
        width: scale(50),
        height: scale(50),
    }
    
});
