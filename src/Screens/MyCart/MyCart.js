import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import homestyles from '../Home/styles';
import { connect } from 'react-redux';
import { addMenuItems, removeMenuItems, resturant_list } from '../../Redux/Restaurants/action';

class MyCart extends React.Component {
    constructor() {
        super();
        this.state = {
            showmore: false,
            length: 0
        }
    }

    componentDidMount() {
        const { cartDishes } = this.props;
        if (cartDishes.length > 2) {
            this.setState({
                showmore: true,
                length: 2
            })
        }
    }
    render() {
        const { cartDishes, totalAmt } = this.props;

        const listOfCart = cartDishes.filter((item) =>{
            return item.Item.qty > 0;
        })

        // console.log(listOfCart)
        return (<SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.amountView}>
                    <View style={styles.amountCardView}>
                        <View style={styles.amountCard}>
                            <Text style={styles.total_label}>Total Cost</Text>
                            <Text style={styles.total_cost}>&#8364;{parseFloat(totalAmt).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: 20, marginVertical: 20 }}>
                    <Text style={homestyles.header}>Review Order</Text>
                </View>
                <View style={{marginBottom:60}}>
                    {
                        cartDishes ?
                        listOfCart.map((item, index) => {
                                return (renderList(item, index,
                                    this.initialItem,
                                    this.addItems,
                                    this.removeItems,
                                    this.state.showmore,
                                    this.showMorePressed,
                                    this.state.length) ) 
                                //item.Item.qty > 0 ? console.log(index): null

                            }) : null
                    }
                   
                </View>
                
            </ScrollView>
            {
                   totalAmt != 0 ? <TouchableOpacity 
                   activeOpacity ={1}
                   style={homestyles.Footer}>
                   <Text style={{ color: 'white', fontSize: 16 }}>Place Order</Text>
               </TouchableOpacity> : null 
                }
        </SafeAreaView>)
    }

    initialItem = (item) => {
        const { addMenuItems } = this.props;
        addMenuItems(item)
    }

    addItems = (item) => {
        const { addMenuItems } = this.props;
        addMenuItems(item)
    }

    removeItems = (item) => {
        const { removeMenuItems } = this.props;
        removeMenuItems(item)
    }

    showMorePressed = () => {
        const { cartDishes } = this.props;
        this.setState({
            showmore: false,
            length: cartDishes.length
        })
    }
}

const renderList = (
    item,
    index,
    initialItem,
    addItems,
    removeItems,
    showmore,
    showMorePressed,
    length) => {
    return (

        // <View style={homestyles.listCard} key={item.Item.id}>
        <View style={homestyles.listCard} key={item.Item.id}>

            {
                item.Item.qty > 0 && index < length? <View >
                    <View style={[homestyles.listview1]}>
                        {
                            item.Item.type1 == 1 ?
                                <View style={{ marginBottom: 5 }}>
                                    <Text style={homestyles.item_types}>N</Text>
                                </View> : null
                        }
                        <View style={homestyles.cardTitle}>
                            <Text style={homestyles.item_title}>{item.Item.title}</Text>
                        </View>

                        <View>
                            {item.Item.qty == 0 ?
                                <TouchableOpacity activeOpacity={1} onPress={() => initialItem(item)}>
                                    <Text style={homestyles.add_button}>ADD</Text>
                                </TouchableOpacity>
                                :
                                <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#DFC3A6' }}>
                                    <TouchableOpacity activeOpacity={1} onPress={() => removeItems(item)}>
                                        <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 15 }}>&#8722;</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 18 }}>{item.Item.qty}</Text>
                                    <TouchableOpacity activeOpacity={1} onPress={() => addItems(item)}>
                                        <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 15 }}>&#43;</Text>
                                    </TouchableOpacity>
                                </View>}
                        </View>
                    </View>


                    <View style={homestyles.listview1}>

                        <View >
                            {
                                item.Item.type2 == 1 ? <Text style={homestyles.item_types}>D</Text> : null
                            }
                        </View>
                        <View style={[homestyles.cardTitle, item.Item.type2 == 1 ? { marginLeft: 10 } : { marginLeft: 30 }]}>
                            <Text style={homestyles.item_des}>{item.Item.description}</Text>
                        </View>
                    </View>
                    <View style={homestyles.listview1}>
                        <View style={homestyles.item_price}>
                            <Text style={homestyles.price_amt}>&#8364;{item.Item.price}</Text>
                        </View>
                    </View>
                </View> : null
            }



            {showmore && index == length ? <TouchableOpacity activeOpacity={1} onPress={() => showMorePressed()} style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 16, fontWeight: '600', textDecorationLine: 'underline' }}>Show more</Text>
            </TouchableOpacity> : null}
        </View>
    )
}


const mapStateToProps = (state) => ({
    cartDishes: state.Resturants.restaurantList.Starters,
    totalQty: state.Resturants.restaurantList.totalQty,
    totalAmt: state.Resturants.restaurantList.totalAmount
});

const mapDispatchToProps = dispatch => ({
    cartDishes_list: resList => dispatch(resturant_list(resList)),
    addMenuItems: items => dispatch(addMenuItems(items)),
    removeMenuItems: items => dispatch(removeMenuItems(items))
});



export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
//export default MyCart;