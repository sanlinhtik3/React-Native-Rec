import {View, StyleSheet, Text, SafeAreaView} from "react-native";

const App = () => {

  return (
      <View>
          <SafeAreaView>
              <View>
                  <Text style={ styles.font_size }>Hello React Native</Text>
                  <Text>Hello React Native</Text>
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
    }
})

export default App;