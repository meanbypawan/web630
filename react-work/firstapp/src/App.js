import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import TestBinding from './TestBinding';
import TableComponent from './TableComponent';
class App extends Component{
  render(){
    return <>
      {/* <Header/>
      <MainContent/>
      <TestBinding/> */}
      <TableComponent/>
    </>
  }
}

export default App;
