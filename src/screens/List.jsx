import { Button, FlatList, StyleSheet, Text, View } from "react-native"; 

import { Dimensions } from "react-native";

import Item from "../components/Todos/Item";

const List = ({ navigation }) => {
  const todoItems = [
    { id: 1, content: "First to-do", done: false },
    { id: 2, content: "Second to-do", done: true },
  ];

  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.listHeader}>List Name</Text>}
        style={[styles.list, { width: windowWidth }]}
        data={todoItems}
        renderItem={({ item }) => (
          <Item content={item.content} done={item.done} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add" onPress={() => navigation.navigate('Create')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listHeader: {
    fontSize: 36,
    fontWeight: 'bold'
  },
});

export default List;