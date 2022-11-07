/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Container,
  Text,
  Avatar,
  Heading,
  Center,
  HStack,
  VStack,
  Flex,
  ScrollView,
  Stack,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import StoryList from './components/storyList';
import FeedList from './components/feed';

function LinearBorder() {
  let localStyles = styles(props);

  return (
    <View style={localStyles.container}>
      <LinearGradient
        start={[1, 0.5]}
        end={[0, 0]}
        color={props.gradientColor}
        style={localStyles.linearGradient}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={localStyles.button}
          onPress={props.onPress}>
          {props.children}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const gradientMargin = circleDiameter => {
  const ratio = (1 - gradientRatio(circleDiameter)) / 2;

  return circleDiameter * ratio;
};
const gradientRatio = circleDiameter => {
  if (circleDiameter < 100) {
    return 0.88;
  } else {
    return 0.96;
  }
};
export default function HomeScreen() {
  const breakpoints = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  };
  return (
    <NativeBaseProvider>
      <StoryList />
    </NativeBaseProvider>
  );
}

const styles = props =>
  StyleSheet.create({
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
      borderRadius:
        (props.circleDiameter / 2) * gradientRatio(props.circleDiameter),
      width: props.circleDiameter * gradientRatio(props.circleDiameter),
      height: props.circleDiameter * gradientRatio(props.circleDiameter),
    },
    text: {
      fontSize: 30,
      color: '#e91e63',
      fontFamily: 'Grandista',
    },
  });
