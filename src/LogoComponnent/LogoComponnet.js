import React from 'react'
import logo from './minilogo.png';

export default class LogoComponnent extends React.Component{
    render(){
        return(
            <img src={logo} alt="logo" />
        );
    }
}