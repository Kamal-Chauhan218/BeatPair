import {View, Text, Button, Pressable, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'wheat',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen Started </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Message')}
      />
    </View>
  );
}
export default Home;
