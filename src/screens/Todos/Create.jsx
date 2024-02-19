import { Button, View, Text, TextInput } from "react-native";

const Create = () => {
  return (
    <View>
      <Text>Add a new todo to your list</Text>

      <TextInput placeholder="What do you want to do?" />

      <Button title="Submit!" />
    </View>
  );
}

export default Create;