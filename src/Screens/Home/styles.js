import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.white
    },
    homeList: {
        position: 'absolute',
        top: '15%',
        bottom: 0,
        width: '100%'
    },
    bannerCard: {
        backgroundColor: Colors.white,
        flexDirection: 'column',
        marginHorizontal: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 7,
        position:'absolute',
        left:0,
        right:0,
        top:120
    },
    bannerTitle: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    bannerText: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bannerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    bannerTitleText: {
        fontSize: 22,
        color: '#091E2E'
    },
    bannerDetails: {
        fontSize: 16,
        color: '#888888'
    },
    button: {
        backgroundColor: '#091E2E',
        padding: 15,
        borderRadius: 10
    },
    menuHeader: {
        marginVertical: 15
    },
    header: {
        fontSize: 20,
        color: '#091E2E',
        fontWeight: '500'
    },



    listview1: {
        flexDirection: 'row',
    },
    types: {
        borderWidth: 1,
        borderColor: '#888888',
        padding: 5,
        borderRadius: 3,
    },
    listCard: {
        flexDirection: 'column',
        marginHorizontal: 20,
    },
    cardTitle: {
        marginHorizontal: 10,
        flex: 1,
    },
    item_title: {
        fontSize: 18,
        color: '#888888'
    },
    item_des: {
        fontSize: 16,
        color: '#888888'
    },
    add_button: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderColor:"orange",
        backgroundColor:"orange",
        color:'white',
        fontWeight:'800'
    },
    item_price: {
        marginLeft: 30,
        marginBottom:10
    },
    price_amt: {
        fontSize: 22,
        color: 'orange'
    },
    item_types: {
        color: '#888888',
        borderWidth: 1,
        borderColor: '#888888',
        paddingLeft: 5,
        paddingRight: 3,
        paddingVertical:3,
        borderRadius: 3,
    },




    Footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection:'row',
        backgroundColor:'#091E2E',
        alignItems:'center',
        justifyContent:'center',
        height:50
    }
})


export default styles;