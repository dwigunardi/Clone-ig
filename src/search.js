import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { VStack, Box, Divider, NativeBaseProvider, AspectRatio, Center, HStack, Heading, Stack, Input, Icon, } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createClient } from 'pexels';
import axios from 'axios';
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

            setPhotoData(res.data)
        })


    }, [])
    console.log(photoData, "ini poto data")
    return (
        <NativeBaseProvider>
            <SearchBar />
            <Box alignItems="flex-start" margin={'5'}>
                <Box w={'20'} h='40' rounded="md" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={9 / 16}>
                            <Image source={{
                                uri: "https://www.pexels.com/photo/sunset-with-love-13585848/",
                                headers:
                                {
                                    Authorization: '563492ad6f9170000100000190b3fb58cd8140029ba8e1b22ffc5331',
                                }
                            }} alt="image"

                            />
                        </AspectRatio>
                    </Box>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}