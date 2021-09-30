import React from 'react';
import { Image, SafeAreaView, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import * as resturantList from '../../../data.json';
import { addMenuItems, removeMenuItems, resturant_list } from '../../Redux/Restaurants/action';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateList: 0
        }
    }

    componentDidMount() {
        const { restaurants_list } = this.props;
        const res_list = resturantList.inkaRestaurant.Menu;
        restaurants_list(res_list)
    }
    render() {
        const { restaurants, totalQty } = this.props;
        // const res_list = resturantList.inkaRestaurant.Menu.Starters;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <View >
                            <Image source={require('../../assets/bannerImg.png')} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
                            <View style={styles.bannerCard}>
                                <View style={styles.bannerTitle}>
                                    <Text style={styles.bannerTitleText}>
                                        Inka Resturant
                                    </Text>
                                </View>

                                <View style={styles.bannerText}>
                                    <Icon name="star" size={16} color="black" style={{ paddingHorizontal: 5, }} />
                                    <Text style={styles.bannerDetails}>
                                        5.0(200+) | All days: 09:00 PM - 06:00 PM
                                    </Text>
                                </View>

                                <View style={styles.bannerText}>
                                    <Icon name="phone-call" size={16} color="black" style={{ paddingHorizontal: 5 }} />
                                    <Text style={styles.bannerDetails}>
                                        Reach us at: 9854562142
                                    </Text>
                                </View>

                                <View style={styles.bannerButton}>
                                    <TouchableOpacity activeOpacity ={1} style={styles.button}>
                                        <Text style={{ color: 'white', fontSize: 16 }}>BOOK A TABLE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={{ marginTop: 100, marginBottom: 60 }} >

                                {
                                    restaurants ?
                                        restaurants.map((item, index) => {
                                            return (renderList(item, index,
                                                this.initialItem,
                                                this.addItems,
                                                this.removeItems))
                                        }) : null
                                }
                            </View>

                        </View>
                    </ScrollView>
                </View>
                {
                   totalQty != 0 ? <TouchableOpacity 
                   activeOpacity ={1}
                   onPress={() => this.moveToMyCart()}
                   style={styles.Footer}>
                   <Icon name="shopping-cart" size={20} color="white" style={{ paddingHorizontal: 5 }} />
                   <Text style={{ color: 'white', fontSize: 16 }}>View Cart ( {totalQty} Items)</Text>
               </TouchableOpacity> : null 
                }

            </SafeAreaView>
        )
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

    moveToMyCart = () =>{
        const { navigation } = this.props;
       navigation.navigate('MyCart')
    }
}


const renderList = (item, index, initialItem, addItems, removeItems) => {
    return (
        <View style={styles.listCard} key={item.Item.id}>
            {
                index == 0 ? <View style={styles.menuHeader}>
                    <Text style={styles.header}>Starter</Text>
                </View> : null
            }

            <View style={[styles.listview1]}>
                {
                    item.Item.type1 == 1 ?
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.item_types}>N</Text>
                        </View> : null
                }
                <View style={styles.cardTitle}>
                    <Text style={styles.item_title}>{item.Item.title}</Text>
                </View>

                <View>
                    {item.Item.qty == 0 ?
                        <TouchableOpacity activeOpacity ={1} onPress={() => initialItem(item)}>
                            <Text style={styles.add_button}>ADD</Text>
                        </TouchableOpacity>
                        :
                        <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#DFC3A6' }}>
                            <TouchableOpacity activeOpacity ={1} onPress={() => removeItems(item)}>
                                <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 15 }}>&#8722;</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18 }}>{item.Item.qty}</Text>
                            <TouchableOpacity activeOpacity ={1} onPress={() => addItems(item)}>
                                <Text style={{ fontSize: 20, fontWeight: '600', paddingHorizontal: 15 }}>&#43;</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
            </View>


            <View style={styles.listview1}>

                <View >
                    {
                        item.Item.type2 == 1 ? <Text style={styles.item_types}>D</Text> : null
                    }
                </View>
                <View style={[styles.cardTitle, item.Item.type2 == 1 ? { marginLeft: 10 } : { marginLeft: 30 }]}>
                    <Text style={styles.item_des}>{item.Item.description}</Text>
                </View>
            </View>
            <View style={styles.listview1}>
                <View style={styles.item_price}>
                    <Text style={styles.price_amt}>&#8364;{item.Item.price}</Text>
                </View>
            </View>
        </View>
    )
}


const mapStateToProps = (state) => ({
    restaurants: state.Resturants.restaurantList.Starters,
    totalQty: state.Resturants.restaurantList.totalQty
})

const mapDispatchToProps = dispatch => ({
    restaurants_list: resList => dispatch(resturant_list(resList)),
    addMenuItems: items => dispatch(addMenuItems(items)),
    removeMenuItems: items => dispatch(removeMenuItems(items))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);