import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Card from '../Components/Card';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                contentContainerStyle={style.scrollView}
            >
                <View style={style.header}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 22, alignSelf: 'center' }}>Thumu Praveen Reddy</Text>
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 22, color: "grey" }}>
                            These are your appointments
                        </Text>
                    </View>
                </View>
                <View style={style.screen}>
                    <View style={style.mainContainer}>
                        <View style={style.card}>
                            <View style={style.imageContainer}>
                                <Image source={require('../Assets/pra.jpeg')} style={style.imageStyle} />
                            </View>
                            <View style={style.cardViewTextStyle}>
                                <Text style={style.name}>Thumu Praveen Reddy</Text>
                                <Text style={style.email}>thumupraveen6964@gmail.com</Text>
                                <Text style={style.mobile}>+91 77290 86226</Text>
                            </View>
                        </View>
                    </View>

                    <View style={style.mainContainer}>
                        <View style={style.edCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>Academic Profile</Text>
                                <View style={style.edDetails}>
                                    <Text style={style.Btech}>B.Tech (CSE) -- Veltech University -- 8.77</Text>
                                    <Text style={style.Btech}>Inter (M.P.C) -- Sri Gayatri Junior College -- 9.32</Text>
                                    <Text style={style.Btech}>10th Class (SSC) -- Sri Geethanjali School -- 8.5</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={style.mainContainer}>
                        <View style={style.card}>

                            <View style={style.Education}>
                                <Text style={style.name}>Technical Skills</Text>
                                <View style={style.edDetails}>
                                    <Text style={style.Btech}>Web Technoliges:</Text>
                                    <Text style={style.Btech}>Html, Css, JavaScript, React-native</Text>
                                </View>

                            </View>
                        </View>
                    <View style={style.mainContainer}>
                        <View style={style.card}>

                            <View style={style.Education}>
                                <Text style={style.name}>Technical Skills</Text>
                                <View style={style.edDetails}>
                                    <Text style={style.Btech}>Web Technoliges:</Text>
                                    <Text style={style.Btech}>Html, Css, JavaScript, React-native</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    screen: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    card: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 350,
        height: 130,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
    },
    imageContainer: {
        justifyContent: 'flex-start',
        width: '30%',
    },
    imageStyle: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginLeft: 10,
        opacity: 0.9,
    },
    cardViewTextStyle: {
        justifyContent: 'flex-end',
        marginLeft: 15,
        width: '70%',
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    mobile: {
        color: 'blue',
        fontSize: 16,
        marginTop: 5,
    },
    email: {
        color: 'blue',
        fontSize: 15,
        marginTop: 5,
    },

    edCard: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 350,
        // height: 'auto',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
    },
    edName: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    edDetails: {
        padding: 5,
    },
    Education: {
        justifyContent: 'flex-end',
        marginLeft: 15,
    },
    Btech: {
        color: 'blue',
        fontSize: 16,
        marginTop: 5,
    },

    

});


export default HomeScreen;