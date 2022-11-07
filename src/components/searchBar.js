import {VStack, Divider, Box, Heading, Input, Icon, Center} from 'native-base';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 0,
  },
});

export default function SearchBar() {
  return (
    <View>
      <VStack
        my="2"
        space={5}
        w="100%"
        maxW="390px"
        marginX={2}
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }>
        <VStack w="100%" space={2} alignSelf="center">
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            px="2"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>
    </View>
  );
}
