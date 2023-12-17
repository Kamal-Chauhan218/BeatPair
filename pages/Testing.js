import {View, Text, Button} from 'react-native';
function Testing({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Testing Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.popToTop()} />
    </View>
  );
}
export default Testing;
