import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { sanpham } from '../Data/Data';
import { chau } from '../Data/Data';
import SectionView from '../../multiComponent/SectionView';
import AxiosInstance from '../../../helper/AxiosInstance';


const Home = props => {
    const { navigation } = props;

    const [products, setProducts] = useState([])
    const [refreshing, setRefreshing] = useState(false) // load san pham khi keo xuong

   
    const fetchProducts = async () => {
        try {
            setRefreshing(true)
            const response = await AxiosInstance().get("/eGetList.php")
            setProducts(response.data)
            setRefreshing(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // hien thi danh sach san pham
    const renderitemProduct = ({ item, index }) => {
        if (index < 6) {
            const { _id, title, author, images } = item
            // console.log(images)
            // console.log(name)
            return (

                <TouchableOpacity style={styles.sanpham}
                >

                    <View>
                        {
                            images.length > 0 ?
                                <Image
                                    source={images}
                                    style={styles.img}
                                />
                                :
                                <Image
                                    source={require('../../../../assets/images/asm/tree01.png')}
                                    style={styles.img}
                                />
                        }


                    </View>

                    <View style={{ width: '77%' }}>
                        <Text style={styles.name} numberOfLines={1}>{title}</Text>


                        <View style={styles.row}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Text style={{ color: 'green', fontSize: 18 }}>{author}{' đ'}</Text>

                            </View>
                          
                        </View>
                    </View>


                </TouchableOpacity>
            )
        } else {
            return null;
        }
    }

    return (
     
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.mainHeader}>
                    <Image
                        source={require('../../../../assets/images/asm/image.png')}
                        style={styles.imgMainHeader}
                    />
                </View>
                <View style={styles.topHeader}>
                    <Text style={styles.title}>
                        Planta - toả sáng{`\n`}không gian nhà bạn
                    </Text>
                    <TouchableOpacity
                        style={styles.imgHeader}
                        onPress={() => navigation.navigate('Cart')}>
                        <Image
                            source={require('../../../../assets/images/asm/cart.png')}

                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.newProduct}
                        onPress={() => navigation.navigate('Seemreall')}>
                        <Text style={styles.txtHangMoi}>Xem sản phẩm mới về</Text>
                        <Image
                            style={styles.iconarrow} source={require('../../../../assets/images/asm/right.png')}

                        />
                    </TouchableOpacity>


                </View>


            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                data={category}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ margin: 10 }}><Text>{item.name}</Text></TouchableOpacity>}
                keyExtractor={item => item._id}
            />

            <FlatList
                data={products}
                renderItem={renderitemProduct}
                keyExtractor={item => item._id}
                refreshing={refreshing}
                onRefresh={fetchProducts}
                numColumns={2}
            />

            <TouchableOpacity
                style={styles.newProducts}
                onPress={() => navigation.navigate('Seemreall')}>
                <Text style={styles.txtHangMois}>Xem thêm sản phẩm</Text>
            </TouchableOpacity>


            {/* phần cuối */}
            <View style={styles.contaics}>
                <Text style={styles.textcs}>Combo chăm sóc (mới)</Text>
            </View>
            <View style={styles.contaifooter}>
                <View style={styles.contenfooter}>
                    <Text style={styles.textfooter}>Lemon Balm Grow Kit </Text>
                    <Text style={styles.textfooter2}>
                        Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker
                        đánh dấu...
                    </Text>
                </View>
                <Image
                    style={styles.imagefooter}
                    source={require('../../../../assets/images/asm/grow.png')}

                />
            </View>
        </ScrollView>

    );
};

export default Home;

const styles = StyleSheet.create({
    newProducts:{
        margin: 10,
        marginLeft: 10
    },
    img: {
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        height: 134,
        width: 155,
    },
    sanpham: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    name: {
        color: 'black',
        fontSize: 17
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },

    imgMainHeader: {
        width: '100%',
        height: 205,
        marginTop: 69,
    },
    mainHeader: {
        width: '100%',
        flexDirection: 'column',
    },
    imgHeader: {
        position: 'absolute',
        end: 0,
        top: 0,
        bottom: -10,
        end: 25,
        width: 48,
        height: 48,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99999,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#221F1F',
        position: 'absolute',
        marginTop: 15,
        start: 25,
    },
    topHeader: {
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 25,
        marginTop: 20,
    },
    header: {
        width: '100%',
    },
    txtHangMoi: {
        color: '#007537',
        fontSize: 16,
        fontWeight: '500',
    },
    newProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 95,
        width: '100%',
        marginLeft: 25

    },

    contaics: {
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 20,
        width: 327,
        height: 49,
        paddingHorizontal: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textcs: {
        color: '#221f1f',
        fontSize: 24,
        fontWeight: '500',
        width: '100%',
        textAlign: 'left',
        fontFamily: 'Lato',
        fontStyle: 'normal',
    },
    contaifooter: {
        flexDirection: 'row',
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20
    },
    contenfooter: {
        width: '69%',
        flexDirection: 'column',
        paddingVertical: 24,
        paddingHorizontal: 17,
    },
    textfooter: {
        width: 155,
        color: '#221f1f',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Lato',
        lineHeight: 22,
        fontStyle: 'normal',
    },
    textfooter2: {
        color: '#221f1f',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Lato',
        lineHeight: 20,
        fontStyle: 'normal',
    },
    imagefooter: {
        width: 110,
        height: 138,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});