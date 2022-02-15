import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from "./ProgressBar";

export default function Card(props: { position: string; }) {
  if (props.position === 'front') {
    return (
      <View style={styles.card}>
        <Text style={[styles.cardText, styles.balanceLabel]}>Utilizado</Text>
        <Text style={[styles.cardText, styles.cardBalance]}>$2,500.00</Text>
        <View>
          <Text style={[styles.cardText, styles.balanceStatus]}>Límite: $10,000.00</Text>
          <ProgressBar value="10%" />
          <Text style={[styles.cardText, styles.balanceStatus]}>Disponible: $9,000.00</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText}>**** **** **** 2145</Text>
        <View style={styles.validity}>
          <View>
            <Text style={styles.cardText}>Valida hasta</Text>
            <Text style={styles.cardText}>**/**</Text>
          </View>
          <View>
            <Text style={styles.cardText}>CVC</Text>
            <Text style={styles.cardText}>***</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0b1e3e',
    borderRadius: 8,
    height: 211,
    width: '100%',
    shadowColor: '#0B1E3E',
    shadowOffset: { width: 58, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingTop: 70
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 16
  },
  balanceLabel: {
    textAlign: 'left',
    fontSize: 13
  },
  cardBalance: {
    fontSize: 34,
    fontWeight: "500",
    textAlign: 'left',
    marginBottom: 16
  },
  balanceStatus: {
    textAlign: 'right',
    fontSize: 13,
    color: '#fff',
    marginHorizontal: 16,
  },
  validity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16
  },
  statusBar: {
    borderRadius: 16,
    height: 6,
    width: '91%',
    backgroundColor: 'rgba(173, 179, 188, 0.2)',
    marginLeft: '5%'
  },
  bar: {
    width: '10%',
    height: '6',
    borderRadius: 16,
    backgroundColor: '#00AAE0',
  }
});
