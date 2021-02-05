import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageLoader from '../Components/ImageLoader';

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageLoader
                    style={styles.image}
                    source={require('../Assets/pra.jpeg')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
});