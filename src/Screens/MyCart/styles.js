import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";


const styles = StyleSheet.create({
    background:{
        backgroundColor:Colors.white
    },
    amountView:{
        backgroundColor:'#091E2E',
        flex:1,
        flexDirection:'row',
        height: 200,
        justifyContent:'center',
        alignItems:'center'
    },
    amountCardView:{
        position:'absolute',
    },
    amountCard:{
        backgroundColor:'white',
        width:170,
        height:100,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    total_label:{
        fontSize:16,
        fontWeight:'500',
        color:'pink'
    },
    total_cost:{
        fontSize:24,
        fontWeight:'700'
    },
    reviewLabel:{
       paddingHorizontal:20,
       paddingTop:10
    },
    review:{
        fontSize: 20,
        color: '#091E2E',
        fontWeight: '500',
    }
})

export default styles;