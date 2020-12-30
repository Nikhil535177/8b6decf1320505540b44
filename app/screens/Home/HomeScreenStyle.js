import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    inputFormHeader: {
        marginTop: verticalScale(20),
    },

    inputStyle: {
        borderWidth: scale(1),
        borderRadius: scale(16),
        borderColor: 'grey',
        paddingLeft: 20,
        width: width - 50,
        height: scale(50),
        alignSelf: 'center',
        marginTop: verticalScale(20),
    },

    submitButton: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(200),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(20),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: scale(30),
    },

    search: {
        fontSize: scale(20),
        marginLeft: scale(20),
        marginVertical: scale(10),
        textAlign: 'left',
        fontWeight: 'bold',
    }
    
});
