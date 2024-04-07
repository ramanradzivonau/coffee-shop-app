import { Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const ProductScreen = () => {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Text>{id}</Text>
		</View>
	);
};

export default ProductScreen;
