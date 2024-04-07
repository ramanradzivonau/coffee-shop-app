import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const OrderScreen = () => {
	return (
		<View>
			<Link href="/success">
				<Text style={{ textDecorationLine: 'underline' }}>Заказать</Text>
			</Link>
		</View>
	);
};

export default OrderScreen;
