import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './App.styles';

function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

function generatePalette(): string[] {
    const baseHue = Math.floor(Math.random() * 360);
    return Array.from({ length: 5 }, (_, i) => hslToHex((baseHue + i * 20) % 360, 70, 55));
}

export default function App() {
    const [palette, setPalette] = useState<string[]>(generatePalette());

    const handleGenerate = () => setPalette(generatePalette());

    const handleShowColors = () => {
        const colorString = palette.join(', ');
        Alert.alert('Color Codes', colorString);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Palette Generator</Text>
            <View style={styles.card}>
                <View style={styles.tools}>
                    <View style={[styles.circle, { backgroundColor: '#ff605c' }]} />
                    <View style={[styles.circle, { backgroundColor: '#ffbd44' }]} />
                    <View style={[styles.circle, { backgroundColor: '#00ca4e' }]} />
                </View>
                <View style={styles.palette}>
                    {palette.map((color) => (
                        <TouchableOpacity
                            key={color}
                            style={[styles.color, { backgroundColor: color }]}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.hex}>{color.replace('#', '')}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.button} onPress={handleGenerate}>
                        <Text style={styles.buttonText}>Generate Palette</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleShowColors}>
                        <Text style={styles.buttonText}>Show Colors</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
