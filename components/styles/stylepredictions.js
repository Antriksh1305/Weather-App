import { StyleSheet } from 'react-native';

const bannerup = StyleSheet.create({
    commontxt: {
        color: 'white',
        fontFamily: 'NotoSans-Medium',
        opacity: 0.7
    },
    footer: {
        height: '60%',
        width: '100%',
        position: 'relative',
        // flex: 1,
        // alignItems: 'stretch',
        // zIndex: 11
    },
    flatlist: {
        paddingTop: 30,
    },
    predictcontainer: {
        padding: 7,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    datadetails: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    scrolltemp: {
        flex: 0.32,
        fontSize: 16,
    },
    scrollicon: {
        flex: 0.58,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrolltime: {
        flex: 0.1,
        height: 'auto',
    },
});

const bannerdown = StyleSheet.create({
    commontxt: {
        color: 'white',
        fontFamily: 'NotoSans-Bold',
    },
    footer: {
        height: '20%',
        position: 'absolute',
        bottom: 0,
        flex: 0,
        alignItems: 'center',
    },
    box1: {
        flex: 0,
        flexDirection: 'row',
    },
    headwrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '92%',
    },
    head: {
        color: '#fff',
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 22,
        position: 'absolute',
        left: 0,
    },
    box2: {
        alignItems: 'flex-end',
        opacity: 0.6,
    },
    box21: {
        color: '#fff',
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 15,
    },
    box22: {
        paddingBottom: 3,
        paddingLeft: 3,
    },
    flatlist: {
        paddingVertical: 10,
    },
    predictcontainer: {
        height: 100,
        width: 80,
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 32,
        borderColor: 'white',
        borderColor: 'rgba(255,255,255,0.2)'
    },
    datadetails: {
        height: '100%',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    scrolltemp: {
        color: '#fff',
        fontFamily: 'NotoSans-Bold',
        fontSize: 16,
        alignSelf: 'center',
    },
    scrollicon: {
        alignSelf: 'center',
        position: 'absolute',
        top: 14,
        zIndex: -1,
    },
    scrolltime: {
        color: '#fff',
        opacity: 0.6,
        fontFamily: 'NotoSans-Bold',
        fontSize: 12,
        alignSelf: 'center',
    },
});

export { bannerup, bannerdown }