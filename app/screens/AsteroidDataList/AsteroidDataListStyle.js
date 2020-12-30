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
        marginTop: verticalScale(20),
    },

    inputStyle: {
        borderWidth: scale(1),
        borderColor: 'grey',
        paddingLeft: 20,
        width: width - 20,
        height: scale(50),
        marginTop: verticalScale(50),
    },

    submitButton: {
        marginTop: verticalScale(20),
        width: scale(200),
        height: scale(50),
        borderRadius: scale(25),
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitText: {
        fontSize: scale(20),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
        marginTop: verticalScale(20),
        marginLeft: scale(20),
    },

    asteroidListCell: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'orange',
        paddingVertical: scale(10),
        borderRadius: scale(10),
        marginTop: verticalScale(20),
        paddingRight: scale(10),
        marginHorizontal: scale(20)
    },

    fieldValue: {
        fontSize: scale(15),
        color: '#000',
        marginLeft: scale(20),
        marginTop: verticalScale(10),
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
    
});
