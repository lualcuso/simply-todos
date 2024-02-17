import { Button, FlatList, StyleSheet, Text, View } from "react-native"; 

import Item from "../components/Todos/Item";

const List = () => {
  const todoItems = [
    { id: 1, content: "First to-do" },
    { id: 2, content: "Second to-do" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={todoItems}
        renderItem={({ item }) => <Item content={item.content} />}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 40,
    padding: 10,
    fontSize: 18,
  },
});

export default List;