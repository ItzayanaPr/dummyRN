import { StyleSheet, View } from 'react-native';

export default function ProgressBar(props: { value: string }) {
	return (
		<View style={styles.statusBar}>
			<View style={{
				width: props.value,
				height: 6,
				borderRadius: 16,
				backgroundColor: '#00AAE0',
			}} />
		</View>
	);
}

const styles = StyleSheet.create({
	statusBar: {
		borderRadius: 16,
		height: 6,
		width: '91%',
		backgroundColor: 'rgba(173, 179, 188, 0.2)',
		marginLeft: '5%',
		marginVertical: 5
	},
});
