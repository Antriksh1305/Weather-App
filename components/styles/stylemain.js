import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const bannerup = StyleSheet.create({
    Mainview: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '100%',
        marginHorizontal: 10,
        borderRadius: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 68,
        borderBottomLeftRadius: 68,
        position: 'relative',
        top: -(height*40/100),
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginHorizontal: 10,
        borderRadius: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 68,
        borderBottomLeftRadius: 68,
    },
    shadow: {
        backgroundColor: '#053882',
        zIndex: -1,
        position: 'absolute',
        height: '100%',
        width: '93%',
        top: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        shadowColor: '#158FF7',
    },
    body: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    commontxt: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
    bodywrapper: {
        flex: 0.68,
    },
    headerwrapper: {
        flex: 0.3,
        flexDirection: 'row',
        alignContent: 'center'
    },
    backbtn: {
        position: 'absolute',
        left: 8,
        paddingTop: 6,
    },
    headicon: {
        color: 'white',
        paddingTop: 5,
        paddingRight: 8,
        fontSize: 20,
    },
    location: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 27,
        alignSelf: 'center',
    },
    weathersvgstyle: {
        position: 'absolute',
        top: 40,
        left: 15,
        zIndex: 10,
    },
    detailswrapper: {
        flex: 0.70,
        justifyContent: 'flex-start',
    },
    today:{
        color: 'white',
        fontSize: 20,
        flex: 0,
    },
    todaytxt: {
        fontSize: height/35, 
        fontFamily: 'NotoSans-Medium',
    },
    temperature: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: height/159.5,
        left: width/7.2,
    },
    temptext: {
        fontSize: width/5.2,
        fontFamily: 'NotoSans-Bold',
    },
    degreesymbol: {
        fontSize: width/11,
        opacity: 0.6,
        paddingTop: 20,
    },
    details: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        left: width/1.95,
    },
    detailsbox1: {
        opacity: 0.5,
        width: '100%',
        position: 'absolute',
        top: height/11,
    },
    contentwrapper: {
        flex: 0.32,
        justifyContent: 'space-around',
    },
    divider: {
        flex: 0.5,
    },
    content: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        borderTopWidth: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.3)',
    },
    contenttxt: {
        fontSize: 12,
        color: 'white',
        opacity: 0.6
    },
});

const bannerdown = StyleSheet.create({
    Mainview: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '79%',
        width: '100%',
        marginHorizontal: 10,
        position: 'absolute',
        top: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 68,
        borderBottomLeftRadius: 68,
        position: 'relative',
        top: -(height*79/100),
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
        marginHorizontal: 10,
        position: 'absolute',
        top: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 68,
        borderBottomLeftRadius: 68,
    },
    shadow: {
        backgroundColor: '#053882',
        zIndex: -1,
        position: 'absolute',
        height: '100%',
        width: '93%',
        top: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
    },
    body: {
        marginTop: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    commontxt: {
        color: 'white',
        fontFamily: 'NotoSans-Regular'
    },
    bodywrapper: {
        flex: 0.8,
    },
    headerwrapper: {
        flex: 0.13,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    headicon: {
        color: 'white', 
        paddingRight: 8,
        paddingBottom: 6,
    },
    location: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 27,
    },
    weathersvgstyle: {
        position: 'absolute',
        top: 30,
        zIndex: -1,
    },
    detailswrapper: {
        flex: 0.87,
        justifyContent: 'flex-end',
    },
    temperature: {
        flex: 0.48,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temptext: {
        fontSize: height/5.6,
        fontFamily: 'NotoSans-Bold',
    },
    degreesymbol: {
        width: 30,
        fontSize: height/17,
        fontFamily: 'NotoSans-Regular',
        paddingBottom: 30,
        opacity: 0.6
    },
    details: {
        flex: 0.15,
        alignItems: 'center',
        paddingBottom: 15,
        paddingRight: 10,
    },
    detailsbox1: {
        fontSize: height/34,
    },
    contentwrapper: {
        flex: 0.2,
        justifyContent: 'space-around',
    },
    divider: {
        flex: 0.5,
    },
    content: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        borderTopWidth: 2,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.3)',
    },
    contenttxt: {
        fontSize: 12,
        color: 'white',
        opacity: 0.6
    },
});

export { bannerup, bannerdown }