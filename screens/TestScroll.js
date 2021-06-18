import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { SpringScrollView } from 'react-native-custom-scroll';

const TestScroll = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'First Item',
        },
        {
            id: '5',
            title: 'Second Item',
        },
        {
            id: '6',
            title: 'Third Item',
        },
        {
            id: '7',
            title: 'First Item',
        },
        {
            id: '8',
            title: 'First Item',
        },
        {
            id: '9',
            title: 'First Item',
        },
        {
            id: '10',
            title: 'First Item',
        },
        {
            id: '11',
            title: 'First Item',
        },
        {
            id: '12',
            title: 'Last Item',
        }
    ];
    const Item = ({ title }) => (

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>

    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <SpringScrollView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </SpringScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default TestScroll;
