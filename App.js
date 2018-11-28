import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word: '',
      result: ''
    }
  }

  calculateWord = () => {
    this.setState({result: this.state.word});
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Count Analyzer</Text>
        </View>

        <View style={Styles.container}>
        <Text>Word:</Text>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Enter your word here'/>
        <Text></Text>
        </View>

        <View style={Styles.container}>
        {/* Button punya tag aku problem, so i change to text.. nanti kau change to button */}
        <Text color="#841584" onPress={this.calculateWord} title='Analyze'>Analyze</Text>
        <Text></Text>
        <Text></Text>
        <Text style={Styles.instructions}>Your word: {this.state.result}</Text>
        {/* <Text style={Styles.instructions}>No of Consonants: {this.state.}</Text>
        <Text style={Styles.instructions}>No of Vowels: {this.state.}</Text>
        <Text style={Styles.instructions}>No of Characters: {this.state.}</Text> */}
        </View>
      </View>
    );
  }
}
