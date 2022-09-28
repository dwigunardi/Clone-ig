import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { VStack, Box, Divider, NativeBaseProvider, AspectRatio, Center, HStack, Heading, Stack, Input, Icon, Spacer, } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createClient } from 'pexels';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const client = createClient('563492ad6f9170000100000190b3fb58cd8140029ba8e1b22ffc5331');

const SearchData = [
    {
        id: 1,
        name: 'Regina Trissteria',
        avatar: "https://www.pexels.com/photo/woman-in-white-and-black-shirt-13623557/",
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


function SearchBar() {
    return <Center>
        <VStack my="4" space={5} w="95%" maxW="50000px" divider={<Box px="2">
            <Divider />
        </Box>}>
            <VStack w="100%" space={5} alignSelf="center">
                <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
            </VStack>
        </VStack>
    </Center>
}

export default function SearchScreen() {
    const [photoData, setPhotoData] = useState([])
    useEffect(() => {
        axios.get('https://api.pexels.com/v1/search?query=people', {
            headers: {
                Authorization: "563492ad6f9170000100000190b3fb58cd8140029ba8e1b22ffc5331",
                Accept: "application/json",
            }
        }).then((res) => {

            setPhotoData(res.data.photos)
        })


    }, [])

    return (
        <NativeBaseProvider>
            <SearchBar />

            <FlatList
                initialScrollIndex={0}
                data={photoData}
                scrollsToTop={true}
                bounces={true}
                alwaysBounceVertical={true}
                contentContainerStyle={{ justifyContent: "space-around" }}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10, }}>
                        <Box style={{ position: "relative" }}>
                            <TouchableOpacity>
                                <AspectRatio w="100%" ratio={9 / 16}>
                                    <Image source={{
                                        uri: item.src.portrait,
                                    }} alt="image"
                                    />

                                </AspectRatio>
                            </TouchableOpacity>
                            <View style={{ fontSize: 20, color: "#000", position: "absolute", top: 30, right: 30, }}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="movie-play" color={"#fff"} size={30} />
                                </TouchableOpacity>
                            </View>
                        </Box>

                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

        </NativeBaseProvider>
    );
}