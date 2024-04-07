import { useEffect } from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [isLoaded, error] = useFonts({
		Sora: require('../assets/fonts/Sora-Regular.ttf'),
		SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
	});

	useEffect(() => {
		if (isLoaded) {
			SplashScreen.hideAsync();
		}
	}, [isLoaded]);

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	useEffect(() => {
		setTimeout(() => setStatusBarStyle('light'), 0); //Hotfix Expo Go StatusBar style on IOS
	}, []);

	if (!isLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerShown: false,
					statusBarTranslucent: true,
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
		</>
	);
};

export default RootLayout;
