import {Image, Text, View} from "react-native";

const App = () => {
  return (
      <View>
        {/*<Image source={require('./assets/favicon.png')} />*/}
          <Image style={{ width: '100%', height: 200 }} source={{ uri: 'https://reactnative.dev/img/homepage/phones.png' }} />
      </View>
  )
}

export default App;