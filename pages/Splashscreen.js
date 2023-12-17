import {View, Text, Button, Pressable, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CircleShape: {
    width: 200,
    height: 200,
    gapSize: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'red',
    backgroundColor: 'white',
  },
  InnerCircleShape: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
  InnerCircleShapeChild: {
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FFCC00',
  },
  text: {
    fontSize: 40,
    marginRight: 20,
    color: 'Black',
    fontFamily:'Arvo-BoldItalic',
    transform: [{rotate: '-20deg'}],
  },
  text1: {
    fontSize: 40,
    marginLeft: 10,
    marginBottom: 10,
    color: 'Black',
    fontFamily: 'Arvo-BoldItalic',
    transform: [{rotate: '-20deg'}],
  },
});

function Splashscreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.CircleShape}>
        <View style={styles.InnerCircleShape}>
          <View style={styles.InnerCircleShapeChild}>
            <Text style={styles.text}>Beat</Text>
            <Text style={styles.text1}>Pair</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Splashscreen;
