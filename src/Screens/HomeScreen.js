import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Card from '../Components/Card';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={style.scrollView} >
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={style.header}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 22, alignSelf: 'center', color: '#fff' }}>Thumu Praveen Reddy</Text>
                        </View>
                    </View>
                </View>
                <View style={style.screen}>
                    {/*=================FIrst Crad for Profile Details============== */}
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

                    {/*=================Second Crad for Educational Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.edCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>Academic Profile:</Text>
                                <View style={style.edDetails}>
                                    <Text style={style.Btech}>B.Tech (CSE) -- Veltech University -- 8.77</Text>
                                    <Text style={style.Btech}>Inter (M.P.C) -- Sri Gayatri Junior College -- 9.32</Text>
                                    <Text style={style.Btech}>10th Class (SSC) -- Sri Geethanjali School -- 8.5</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*=================Third Crad for Tech Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.card}>
                            <View style={style.Education}>
                                <Text style={style.edName}>Technical Skills:</Text>
                                <View style={style.edDetails}>
                                    <Text style={style.Btech}>Web Technoliges:</Text>
                                    <Text style={style.Btech}>Html, Css, JavaScript, React-native</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*=================Fourth Crad for Project Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.ProjectCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>PROJECTS:</Text>
                                <View style={style.edDetails}>
                                    <Text style={style.Btechproject}> Effective on Demand Blood donation on Medical Emergency 6 months(2019)</Text>
                                    <Text style={style.Btech}>     Android based application which will connect all the blood donors and receivers,
                                    Developed in android sdk.The idea behind this project to connect all the people who all are
                                interested in social service, such as people who all are interested in donating blood.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*=================Fifth Crad for Project Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.ProjectCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>EXTRACURRICULAR ACTIVITES:</Text>
                                <View style={style.edDetails}>

                                    <Text style={style.Btech}>1.Participated in Guinness world Record in Forming largest Human wheel chair .</Text>
                                    <Text style={style.Btech}>2. Participated in 5K Marathon Conducted by The Sahruday Foundation.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*=================Fourth Crad for Project Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.ProjectCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>INDUSTRIAL EXPOSURE:</Text>
                                <View style={style.edDetails}>

                                    <Text style={style.Btech}>1.Inplant training in Human Resourses-Employee Development Centre at ITI LIMITED,
                                 Doornavaninagar,Banglore.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*=================Fourth Crad for Project Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.ProjectCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>ACHIVEMENTS &AWARDS:</Text>
                                <View style={style.edDetails}>

                                    <Text style={style.Btech}>1. Certificate of Appreciation in National Conference on paper named Blood Sharing
                                    over through a Medical Application in NCECTA 2019</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*=================Fourth Crad for Project Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.ProjectCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>HOBBIES:</Text>
                                <View style={style.edDetails}>

                                    <Text style={style.Btech}>1.Listening to Music</Text>
                                    <Text style={style.Btech}>2.Intrested in outdoor games</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*=================Fourth Crad for Project Details============== */}
                    <View style={style.mainContainer}>
                        <View style={style.ProjectCard}>
                            <View style={style.Education}>
                                <Text style={style.edName}>STRENGTH:</Text>
                                <View style={style.edDetails}>

                                    <Text style={style.Btech}>1.Honest</Text>
                                    <Text style={style.Btech}>2.Willing to Learn</Text>
                                    <Text style={style.Btech}>3.Patience</Text>
                                    <Text style={style.Btech}>4.Self Confident</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    // scrollView: { flex: 1 },
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
        // backgroundColor: 'white',
        backgroundColor: 'black',
    },

    /*=================FIrst Crad for Profile Details============== */
    card: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 350,
        height: 130,
        shadowColor: 'white',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        // backgroundColor: 'white',
        backgroundColor: '#2B2828',
        borderRadius: 8,
        alignItems: 'center',
        elevation: 10,
    },
    imageContainer: { justifyContent: 'flex-start', width: '25%' },
    imageStyle: {
        borderRadius: 50,
        width: 80,
        height: 90,
        marginLeft: 8,
        opacity: 0.9,
    },
    cardViewTextStyle: {
        justifyContent: 'flex-end',
        marginLeft: 15,
        width: '75%',
    },
    name: {
        color: '#F1CECE',
        fontSize: 20,
        fontWeight: 'bold',
    },
    mobile: {
        color: 'skyblue',
        fontSize: 16,
        marginTop: 5,
    },
    email: {
        color: 'skyblue',
        fontSize: 15,
        marginTop: 5,
    },

    /*=================Second Crad for Education Details============== */
    edCard: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 350,
        // height: 'auto',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        // backgroundColor: 'white',
        backgroundColor: '#2B2828',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
    },
    edName: {
        color: '#F1CECE',
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
        color: 'skyblue',
        fontSize: 16,
        marginTop: 5,
    },
    Btechproject: {
        color: 'skyblue',
        fontSize: 16,
        marginTop: 5,
        fontWeight:'bold'
    },

    /*=================Fourth Crad for Project Details============== */
    ProjectCard: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 350,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
        // backgroundColor: 'white',
        backgroundColor: '#2B2828',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
    },
    prBtech: {
        color: 'black',
        fontSize: 16,
        marginTop: 10,
    },
    edName: {
        color: '#F1CECE',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    edDetails: {
        padding: 5,
    }

});


export default HomeScreen;