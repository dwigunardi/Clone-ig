import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, Alert, FlatList, StatusBar } from 'react-native';
import {
    NativeBaseProvider, Box,
    Container, Text, Avatar,
    Heading, Center, HStack, VStack, Flex, ScrollView, Stack
} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import FeedList from './feed';
export default function StoryList() {
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
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // marginTop: StatusBar.currentHeight || 0,
            marginTop: 0,
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
    const AvatarData = [
        {
            id: 1,
            name: 'Add story',
            avatar: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
        },
        {
            id: 2,
            name: 'Toke',
            avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 3,
            name: "nabil",
            avatar: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 4,
            name: 'anang',
            avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 5,
            name: 'firman',
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 6,
            name: 'Dewista',
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 7,
            name: 'ariel',
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 8,
            name: "yoga",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 9,
            name: "yuna",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 10,
            name: "ike",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 11,
            name: "alam",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    ]
    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(image => {
                setUri(image.path);
                props.onChange?.(image);
            })

    };
    function check(item) {
        if (item.id == 1) {
            return <TouchableOpacity onPress={openCamera()}>
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
                    }} size="lg">
                    </Avatar>
                </LinearGradient>
                <Text>Add story</Text>
            </TouchableOpacity>
        } else if (item.id >= 2) {
            return (
                <View>

                </View>
            )
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Box flex="1" safeAreaTop={true} >
                <VStack w="100%" px="1" >
                    <Stack direction='row' mb='2.5' space={1}>
                        <View>
                            <FlatList
                                initialScrollIndex={0}
                                horizontal={true}
                                data={AvatarData}
                                contentContainerStyle={{ alignSelf: 'stretch' }}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity>
                                            <LinearGradient
                                                colors={gradientColor}
                                                start={{ x: 0.0, y: 1.0 }}
                                                end={{ x: 1.0, y: 1.0 }}
                                                style={{
                                                    borderRadius: 100,
                                                    padding: 2,
                                                    overflow: 'hidden',
                                                    marginHorizontal: 5,
                                                }}>
                                                <Avatar bg="green.500" source={{
                                                    uri: item.avatar
                                                }} size="lg"
                                                >
                                                </Avatar>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <Text style={{ textAlign: "center" }}>{item.name}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </Stack>
                </VStack>
                <FeedList />
            </Box>
        </SafeAreaView>
    )
}