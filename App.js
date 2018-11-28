import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word: '',
      result: '',
      break: 0,
      countCon: 0,
      countV: 0
    }
  }

  calculateWord = () => {

    // setState for word
    this.setState( {result: this.state.word} );

    // setState for no of character
    this.setState( {break: noOfChar} );

    // declare and split the word into array
    var num = this.state.word ;
    var newWord = num.split("");

    //calculate no of character
    var noOfChar = num.length;
    
    var x;
    var countConso=0;
    var countVow=0;

    // to iterate each element in newWord array
    for(x in newWord){
      var vowel = ['a','A','e','E','i','I','o','O','u','U'];
      
      // to detect if letter exist in newWord array
      if ( vowel.includes(newWord[x]) ){
        countVow = countVow+1;
      } else {
        countConso = countConso+1;
      }
    }
    // set final variable to State
    this.setState({countCon: countConso});
    this.setState({countV: countVow});
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
        <Text color="#841584" onPress={this.calculateWord} title='Analyze'>Analyze</Text>
        <Text></Text>
        <Text></Text>
        <Text style={Styles.instructions}>Your word: {this.state.result}</Text>
        <Text style={Styles.instructions}>No of Consonants: {this.state.countCon}</Text>
        <Text style={Styles.instructions}>No of Vowels: {this.state.countV}</Text>
        <Text style={Styles.instructions}>No of Characters: {this.state.break}</Text>
        </View>
      </View>
    );
  }
}
