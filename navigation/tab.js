import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabBar,
} from '@react-navigation/bottom-tabs';

import { Home } from '../screens';
import TestScroll from '../screens/TestScroll';
import TestScroll2 from '../screens/TestScroll2';
import { COLORS, icons } from '../constants';
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();
const tabColor = COLORS.white;

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected;

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0,
                    }}>
                    <View style={{ flex: 1, backgroundColor: tabColor }}></View>
                    <Svg width={74.8} height={61} viewBox="0 0 74.8 61">
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={tabColor}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: tabColor }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: tabColor,
                    }}
                    onPress={onPress}>
                    {children}
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: tabColor,
                }}
                activeOpacity={1}
                onPress={onPress}>
                {children}
            </TouchableOpacity>
        );
    }
};

const renderTabOptions = (props) => {
    return (
        <Tab.Screen
            name={props.name}
            component={props.component}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={props.icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused
                                ? COLORS.primary
                                : COLORS.secondary,
                        }}></Image>
                ),
                tabBarButton: (tabBarProps) => (
                    <TabBarCustomButton {...tabBarProps}></TabBarCustomButton>
                ),
            }}></Tab.Screen>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0,
                    marginBottom: 11,
                },
            }}
            tabBarPosition="bottom">
            {renderTabOptions({
                name: 'Home',
                component: Home,
                icon: icons.cutlery,
            })}
            {renderTabOptions({
                name: 'test1',
                component: TestScroll2,
                icon: icons.search,
            })}
            {renderTabOptions({
                name: 'like',
                component: Home,
                icon: icons.like,
            })}
            {renderTabOptions({
                name: 'test2',
                component: TestScroll,
                icon: icons.user,
            })}
        </Tab.Navigator>
    );
};
export default Tabs;
