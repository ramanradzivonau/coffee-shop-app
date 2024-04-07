import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const CatalogScreen = () => {
	return (
		<View>
			<Link href="/catalog/12345678">
				<Text style={{ textDecorationLine: 'underline' }}>Продукт id:12345678</Text>
			</Link>
			<Link href="/address">
				<Text style={{ textDecorationLine: 'underline' }}>Изменить дрес</Text>
			</Link>
			<Link href="/order">
				<Text style={{ textDecorationLine: 'underline' }}>Заказ</Text>
			</Link>
		</View>
	);
};

export default CatalogScreen;
