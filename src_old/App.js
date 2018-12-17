/*
 src/App.js
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction'

class App extends Component {
  simpleAction = (event) => {
   this.props.simpleAction();
  }
 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      <button onClick={this.simpleAction}>Test redux action</button>
      <pre>
       {
        JSON.stringify(this.props)
       }
      </pre>
    </p>
   </div>
  );
 }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


