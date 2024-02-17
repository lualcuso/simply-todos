import { StyleSheet, Text } from "react-native"
const Item = ({content}) => {
  return (<Text style={styles.item}>{content}</Text>)
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    fontSize: 18,
    textAlign: 'left'
  },
});

export default Item;