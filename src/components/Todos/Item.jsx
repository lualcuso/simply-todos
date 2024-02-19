import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Item = ({content, done}) => {
  const [isDone, setIsDone] = useState(done);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={isDone}
        onPress={(isChecked) => setIsDone(isChecked)}
      />
      <Text style={styles.item}>{content}</Text>
    </View>
  );
}

// 2519-8090

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  item: {
    fontSize: 18,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});

export default Item;