import {View, StyleSheet, Text} from "react-native";

const App = () => {

  return (
      <View style={styles.container}>
          <Text style={styles.header}>Flex Box</Text>

          <View style={styles.LayoutControl}>
              <View style={styles.Box}></View>
              <View style={styles.Box2}></View>
              <View style={styles.Box3}></View>
          </View>

      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: "#ecfdf5"
    },
    LayoutControl: {
        backgroundColor: "#ffe4e6",
        flex: 1,
        flexDirection: "row"
    },
    Box: {
        width: 100,
        height: 100,
        backgroundColor: "#5eead4",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 300,
    },
    Box2: {
        width: 100,
        height: 100,
        backgroundColor: "#d8b4fe",
        flexGrow: 1
    },
    Box3: {
        width: 100,
        height: 100,
        backgroundColor: "#a5b4fc",
        flexGrow: 1
    }
})

export default App;