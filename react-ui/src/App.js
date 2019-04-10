import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    linearCounter: null,
    linearMessage: 'hello',
    binaryCounter: null,
    binaryMessage: 'hello',
    search: null,
    sortedArr: [
      1, 2, 3, 5, 6, 6, 6, 7, 7, 
      9, 9, 11, 13, 13, 13, 14, 
      14, 15, 16, 16, 17, 21, 22, 
      23, 24, 25, 25, 26, 26, 27, 
      27, 27, 28, 28, 28, 30, 31, 
      32, 32, 33, 34, 38, 38, 39, 
      40, 40, 42, 42, 43, 44, 45, 
      46, 46, 46, 48, 49, 50, 51, 
      51, 53, 53, 54, 55, 56, 62, 
      63, 64, 64, 64, 65, 67, 68, 
      69, 69, 70, 70, 72, 72, 73, 
      73, 76, 78, 78, 80, 81, 82, 
      83, 84, 85, 87, 87, 88, 88, 
      89, 90, 91, 93, 97, 98, 98]
  }

linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      this.setState({
        linearCounter: i+1,
      }, () => {
        this.setState({linearMessage: `Found it in ${this.state.linearCounter} many steps`})
      });
      return;
      }
      else {
        this.setState({
          linearCounter: i+1,
          }, () => {
            this.setState({linearMessage: `Took ${this.state.linearCounter} steps, but did not find the number`})
          })
      }
    }
};

binarySearch = (array, value, start, end, counter=1) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length -1 : end;

  if (start > end) {
    this.setState({
      binaryCounter: counter
    }, () => {
      this.setState({
        binaryMessage: `Took ${this.state.binaryCounter} steps, but did not find the number`})
    })
    return;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(item);
  if (item === value) {
    this.setState({
      binaryCounter: counter
    }, () => {
      this.setState({
        binaryMessage: `Found it in ${this.state.binaryCounter} steps`})
    })
    
  }
  else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, counter+1);
  }
  else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, counter+1);
  }
};

searchVal=(e)=>{
  this.setState({
    search: e.target.value})

}


  render() {
    console.log(this.state.binaryMessage);
    
    return (
      <div className="App">
        <form>
          <input type='number' name='search' onChange={(e) => this.searchVal(e)}></input>
          <button type='button' onClick = {() => this.linearSearch(this.props.data, parseInt(this.state.search))}>Linear Search</button>
          <button type='button' onClick = {() => this.binarySearch(this.state.sortedArr, parseInt(this.state.search))}>Binary Search</button>
        </form>
      </div>
    );
  }
}

export default App;
