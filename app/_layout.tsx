import { Stack } from 'expo-router';

export default function Views() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
        </Stack>      
    );

};
