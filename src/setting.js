import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function SettingsScreen() {

    return (
        <WebView source={{ uri: "https://www.dignitas.id/" }} />
    )
}