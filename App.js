import {TextInput, View, StyleSheet, SafeAreaView} from "react-native";
import {useState} from "react";

const App = () => {
    const [input, setInput] = useState("Ant Man");

  return (
      <View>
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder="Please Enter Your Name"
                value={input}
                onChangeText={setInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Please Enter Your Password"
            />
        </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 12,
        borderRadius: 5
    }
})

export default App;