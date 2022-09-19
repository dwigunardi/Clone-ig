import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, Alert, FlatList, StatusBar, Image } from 'react-native';
import {
    NativeBaseProvider, Box,
    Container, Text, Avatar,
    Heading, Center, HStack, VStack, Flex, ScrollView, Stack, AspectRatio, Spacer,
} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function FeedList() {
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
    const breakpoints = {
        base: 0,
        sm: 395,
        md: 768,
        lg: 992,
        xl: 1280,
    };
    const dataFeed = [
        {
            id: 1,
            name: 'Nabil Lanten',
            avatar: "https://ui-avatars.com/api/?name=Nabil+Lanten",
            feed: 'https://randomwordgenerator.com/img/picture-generator/5fe1dd4b425bb10ff3d8992cc12c30771037dbf85254794e722679dc914e_640.jpg',
            description: 'lah sikuntul ini',
            createdAt: new Date().getMinutes(),
            liked: Math.random().toString().length,
            comment: Math.random().toString().length,
        },
        {
            id: 2,
            name: 'Ucil Gimank',
            avatar: "https://ui-avatars.com/api/?name=Ucil+Gimank",
            feed: 'https://randomwordgenerator.com/img/picture-generator/54e3d1474b57ac14f1dc8460962e33791c3ad6e04e507441722a72dc954ac3_640.jpg',
            description: 'Sakit banget cok.....',
            createdAt: new Date().getMinutes(),
            liked: Math.random().toString().length,
            comment: Math.random().toString().length,
        },
        {
            id: 3,
            name: 'Ariel Kikouka',
            avatar: "https://ui-avatars.com/api/?name=Ariel+kikouka",
            feed: 'https://randomwordgenerator.com/img/picture-generator/57e8d7464e57ac14f1dc8460962e33791c3ad6e04e507441722a72dc9e4bc7_640.jpg',
            description: 'Gacha is my life.... abis tinggal gesek',
            createdAt: new Date().getMinutes(),
            liked: Math.random().toString().slice(2, 3),
            comment: Math.random().toString().length,
        },
        {
            id: 4,
            name: 'Saya bukan manusia',
            avatar: "https://ui-avatars.com/api/?name=Faizal+ucil+Cikal+kampret",
            feed: 'https://randomwordgenerator.com/img/picture-generator/57e4d2424954ad14f1dc8460962e33791c3ad6e04e50744172287ed3934dc1_640.jpg',
            description: 'Toxic is way of life, said a person who live in darkness',
            createdAt: new Date().getMinutes(),
            liked: Math.random().toString().slice(2, 3),
            comment: Math.random().toString().length,
        }
    ]
    function RenderData(item) {
        return (
            <Container marginY={2}>
                <Box alignItems="center">
                    <Box minW={[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl, breakpoints.base]} rounded="lg" overflow="hidden" borderColor="coolGray.200" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>
                        <Box>
                            <Flex direction='row'>
                                <Center>
                                    <View style={{ height: 33, marginBottom: 5, marginTop: 4, marginHorizontal: 5, }}>
                                        <LinearGradient
                                            colors={gradientColor}
                                            start={{ x: 0.0, y: 1.0 }}
                                            end={{ x: 1.0, y: 1.0 }}
                                            style={{
                                                borderRadius: 100,
                                                padding: 2,
                                                overflow: 'hidden',
                                            }}>
                                            <Image
                                                style={{ width: 30, height: 30, borderRadius: 50, shadowColor: "#000", shadowRadius: 4, shadowOpacity: 0.5 }}
                                                source={{
                                                    uri: item.avatar
                                                }} />
                                        </LinearGradient>
                                    </View>
                                </Center>
                                <Center>
                                    <Text >{item.name}</Text>
                                </Center>
                                <Spacer />
                                <Center marginRight={2}>
                                    <SimpleLineIcons name='options-vertical' size={20} color="#000" />
                                </Center>
                            </Flex>
                            <AspectRatio w="full" ratio={16 / 9}>
                                <Image source={{
                                    uri: item.feed
                                }} alt="image" />
                            </AspectRatio>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                {/* <Heading size="md" ml="-1">
                                    The Garden City
                                </Heading> */}
                                <Flex direction='row'>
                                    <Flex direction='column' marginRight={2}>
                                        <MaterialCommunityIcons name='heart-outline' size={20} color='#000' />
                                    </Flex>
                                    <Flex direction='column' marginRight={2}>
                                        <MaterialCommunityIcons name='message-outline' size={20} color='#000' />
                                    </Flex>
                                    <Flex direction='column'>
                                        <Ionicons name='paper-plane-outline' size={20} color='#000' />
                                    </Flex>
                                    <Spacer />
                                    <Center>
                                        <MaterialCommunityIcons name='bookmark-outline' size={20} color='#000' />
                                    </Center>
                                </Flex>
                                <Text fontSize="xs" _light={{
                                    color: "black"
                                }} _dark={{
                                    color: "black"
                                }} fontWeight="500" ml="-0.5" mt="-1">
                                    {item.liked} Suka
                                </Text>
                                <Text fontSize="xs" _light={{
                                    color: "black"
                                }} _dark={{
                                    color: "black"
                                }} fontWeight="500" ml="-0.5" mt="-1">
                                    {item.name} <Text fontWeight="400">
                                        {item.description}
                                    </Text>
                                </Text>
                            </Stack>

                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }} fontWeight="400">
                                        {item.createdAt} minutes ago ...
                                    </Text>
                                </HStack>
                            </HStack>
                            <VStack>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    Lihat semua {item.comment} komentar
                                </Text>
                            </VStack>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        )
    }
    return (
        <FlatList
            data={dataFeed}
            renderItem={({ item }) => (
                <View>
                    {RenderData(item)}
                </View>
            )}
            keyExtractor={(item) => item.id}
        >

        </FlatList >
    )
}