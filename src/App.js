import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Component/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// import {BounceLoader,BarLoader,BeatLoader} from "react-spinners";
import NavBar from './Component/NavBar';
//import {FaBong} from 'react-icons/fa'
class App extends React.Component {
  render() {
  return (
    <div>
    <NavBar />
    </div> 
  )
    };
  
}


export default App;
