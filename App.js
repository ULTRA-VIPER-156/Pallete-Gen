import React from 'react';
import { StyleSheet, View } from 'react-native';
import Alx from '../Components/App.tsx';


export default function App() {
    return (
        <View style={styles.app}>
            <Alx />
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444443ff',
    },
});