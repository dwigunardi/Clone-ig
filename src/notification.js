import React, { useState } from 'react';
import { Text, View } from 'react-native';


export default function NotificationScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 100, color: '#000' }}>Notification!</Text>
        </View>
    );
}