import {
	ImageBackground,
	StyleSheet,
	Dimensions,
	Text,
	View,
	SafeAreaView,
	Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Colors, Fonts, FontsFamily, Gaps, Paddings } from '../shared';
import { router } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

const StartScreen = () => {
	const animatedYPosition = new Animated.Value(-74);
	const animatedOpacityValue = new Animated.Value(0);

	const animateTitlePosition = () => {
		Animated.timing(animatedYPosition, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const animateTitleOpacity = () => {
		Animated.timing(animatedOpacityValue, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const animateTitle = () => {
		animateTitlePosition();
		animateTitleOpacity();
	};

	return (
		<SafeAreaView style={Styles.screen}>
			<StatusBar style="light" />
			<ImageBackground
				source={require('../assets/StartScreen/backgroundImage.jpg')}
				style={Styles.image}
				imageStyle={Styles.backgroundImage}
				resizeMode="cover"
			>
				<LinearGradient
					style={Styles.topLinearGradient}
					colors={[Colors.black, 'rgba(0, 0, 0, 0)']}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 0.15 }}
				>
					<LinearGradient
						style={Styles.container}
						colors={['rgba(0, 0, 0, 0)', Colors.black]}
						start={{ x: 0, y: 0.55 }}
						end={{ x: 0, y: 0.7 }}
					>
						<View>
							<Animated.Text
								onLayout={animateTitle}
								style={[
									Styles.title,
									{
										transform: [{ translateY: animatedYPosition }],
										opacity: animatedOpacityValue,
									},
								]}
							>
								Одно из самых вкусных кофе в городе!
							</Animated.Text>
							<Text style={Styles.text}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
						</View>
						<Button
							text="Начать"
							onPress={() => {
								router.navigate('/catalog');
							}}
						/>
					</LinearGradient>
				</LinearGradient>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default StartScreen;

const Styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.black,
	},
	backgroundImage: {
		position: 'absolute',
		bottom: 276,
		left: -windowWidth * 0.125,
		width: windowWidth * 1.25,
	},
	topLinearGradient: {
		flex: 1,
		width: windowWidth,
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: Paddings.p30,
		paddingBottom: Paddings.p42 - Gaps.g24,
		gap: Gaps.g24,
	},
	image: {
		overflow: 'visible',
	},
	title: {
		fontFamily: FontsFamily.semibold,
		fontSize: Fonts.f34,
		fontWeight: '600',
		lineHeight: 43,
		textAlign: 'center',
		color: Colors.white,
	},
	text: {
		marginTop: 8,
		fontFamily: FontsFamily.regular,
		fontSize: Fonts.f14,
		lineHeight: 22,
		textAlign: 'center',
		color: Colors.lightGray,
	},
});