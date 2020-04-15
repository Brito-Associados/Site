import React from 'react';
import Apresentation from './ApresentationComponnent/ApresentationComponnent';
import NavBar from './NavBarComponnent/NavBarComponnent';
import './App.css';

export default class App extends React.Component{

  render(){
  
    return(
  
        <div>
         
          <Apresentation />
        </div>
      
    );
  }
}
