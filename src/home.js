import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
import {
    NativeBaseProvider, Box,
    Container, Text, Avatar,
    Heading, Center, HStack, VStack, Flex, ScrollView, Stack
} from "native-base";
import LinearGradient from 'react-native-linear-gradient';

// function LinearBorder() {
//     let localStyles = styles(props)

//     return (
//         <View style={localStyles.container}>
//             <LinearGradient
//                 start={[1, 0.5]}
//                 end={[0, 0]}
//                 color={pros.gradientColor}
//                 style={localStyles.linearGradient}
//             >
//                 <TouchableOpacity activeOpacity={.8} style={localStyles.button} onPress={props.onPress}>
//                     {props.children}
//                 </TouchableOpacity>
//             </LinearGradient>
//         </View>
//     )
// }
// const gradientMargin = (circleDiameter) => {
//     const ratio = (1 - gradientRatio(circleDiameter)) / 2

//     return circleDiameter * ratio
// }
// const gradientRatio = (circleDiameter) => {
//     if (circleDiameter < 100) {
//         return 0.88
//     } else {
//         return 0.96
//     }
// }
export default function HomeScreen() {
    const breakpoints = {
        base: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1280,
    };
    const gradientColor = [
        '#FCAF45',
        '#FFDC80',
        '#E1306C',
        '#FD1D1D',
        '#F56040',
        '#F77737',
        '#833AB4',
        '#C13584',
    ]
    return (
        <NativeBaseProvider>
            <ScrollView horizontal={true} overflowX={'hidden'}>
                <Box flex="1" safeAreaTop >
                    <VStack space={'gutter'} w="100%" px="5" >
                        <Stack direction='row' mb='2.5' mt={'1.5'} space={3}>
                            <TouchableOpacity onPress={() => Alert.alert("Hy")}>
                                <LinearGradient
                                    colors={gradientColor}
                                    start={{ x: 0.0, y: 1.0 }}
                                    end={{ x: 1.0, y: 1.0 }}
                                    style={{
                                        borderRadius: 100,
                                        padding: 2,
                                        overflow: 'hidden',
                                    }}>
                                    <Avatar bg="green.500" source={{
                                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    }} size="md">

                                    </Avatar>
                                </LinearGradient>
                            </TouchableOpacity>
                            <LinearGradient
                                colors={gradientColor}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                style={{
                                    borderRadius: 100,
                                    padding: 2,
                                    overflow: 'hidden',
                                }}>
                                <Avatar bg="cyan.500" source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }} size="md">

                                </Avatar>
                            </LinearGradient>
                            <LinearGradient
                                colors={gradientColor}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                style={{
                                    borderRadius: 100,
                                    padding: 2,
                                    overflow: 'hidden',
                                }}>
                                <Avatar bg="indigo.500" source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }} size="md">
                                </Avatar>
                            </LinearGradient>
                            <LinearGradient
                                colors={gradientColor}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                style={{
                                    borderRadius: 100,
                                    padding: 2,
                                    overflow: 'hidden',
                                }}>
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }} size="md">

                                </Avatar>
                            </LinearGradient>
                            <LinearGradient
                                colors={gradientColor}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                style={{
                                    borderRadius: 100,
                                    padding: 2,
                                    overflow: 'hidden',
                                }}>
                                <Avatar bg="green.500" source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }} size="md">

                                </Avatar>
                            </LinearGradient>
                            <LinearGradient
                                colors={gradientColor}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                style={{
                                    borderRadius: 100,
                                    padding: 2,
                                    overflow: 'hidden',
                                }}>
                                <Avatar bg="green.500" source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }} size="md">

                                </Avatar>
                            </LinearGradient>
                            <LinearGradient
                                colors={gradientColor}
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                style={{
                                    borderRadius: 100,
                                    padding: 2,
                                    overflow: 'hidden',
                                }}>
                                <Avatar bg="green.500" source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }} size="md">

                                </Avatar>
                            </LinearGradient>
                        </Stack>
                    </VStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>

    )
}

const styles = (props) => StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 0,
    },
    linearGradient: {
        borderRadius: props.circleDiameter / 2,
        width: props.circleDiameter,
        height: props.circleDiameter,
    },
    button: {
        margin: gradientMargin(props.circleDiameter),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: (props.circleDiameter / 2) * gradientRatio(props.circleDiameter),
        width: props.circleDiameter * gradientRatio(props.circleDiameter),
        height: props.circleDiameter * gradientRatio(props.circleDiameter),
    },
    text: {
        fontSize: 30,
        color: '#e91e63',
        fontFamily: "Grandista",
    }
});