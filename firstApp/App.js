import React, { Component } from 'react'
import Svg, {
  Circle,
  Ellipse,
  G,
  //Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }

  onPress = (count) => {
    this.setState({
      count: count
    })
  }

 render() {
    return (
      
      <View style={styles.container}>
        <ShowComponent count = {this.state.count} />
        
        <UpdateComponent increaseFunction = {this.onPress} count = {this.state.count}/>
      </View>
    );
  }
}

class ShowComponent extends Component {
  render(){
    return (
    <View>
      <Text style={{color: 'blue', fontSize: 30}}>
        You clicked { this.props.count } times
      </Text>
      {/* <Svg width="100%" height="100%" viewBox="0 0 800 300">
  <Defs>
    <LinearGradient id="Gradient" gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="800"
      y2="0"
    >
      <Stop offset="0" stopColor="white" stopOpacity="0" />
      <Stop offset="1" stopColor="white" stopOpacity="1" />
    </LinearGradient>
    <Mask id="Mask" maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="800"
      height="300"
    >
      <Rect x="0" y="0" width="800" height="300" fill="url(#Gradient)" />
    </Mask>
    <Text
      id="Text"
      x="400"
      y="200"
      fontFamily="Verdana"
      fontSize="30"
      textAnchor="middle"
    >
      You clicked { this.props.count } times
    </Text>
  </Defs>
  <Use href="#Text" fill="red" mask="url(#Mask)" />
  <Use href="#Text" fill="none" stroke="black" stroke-width="1" />
</Svg> */}
    </View>
    
    )
  }
}

class UpdateComponent extends Component {
  increaseFunction = () => {this.props.increaseFunction(this.props.count + 1)}
  render(){
    return(
      
      <TouchableOpacity
         style={styles.button}
         onPress={this.increaseFunction}
        >
         <Text style={{color: 'red', fontSize: 20}}>Click me</Text>
        </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginTop: 50,
    padding: 10,
  },
  red: {
    color: 'green',
    fontSize: 25
  },
})

export default App;