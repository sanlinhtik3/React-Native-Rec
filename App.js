import {View, StyleSheet, Text, SafeAreaView} from "react-native";

const App = () => {

  return (
      <View>
          <SafeAreaView>
              <View>
                  <Text style={ styles.font_size }>Width & Height</Text>
                  <View style={styles.Box}></View>
              </View>
          </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
    font_size: {
        fontSize: 30,
        color: "#007bff",
        fontWeight: "bold"
    },
    Box: {
        width: 300,
        height: 100,
        backgroundColor: "#007bff"
    }
})

export default App;