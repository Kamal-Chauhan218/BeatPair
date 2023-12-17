import {View, Text, Button} from 'react-native';
function Message({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Message Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Testing')}
      />
    </View>
  );
}
export default Message;
