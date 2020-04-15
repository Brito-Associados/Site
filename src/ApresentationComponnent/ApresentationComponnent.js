import React from 'react';
import Logo from '../LogoComponnent/LogoComponnet';
import Titles from '../TitleComponnent/TitleComponnent';
import Contacts from '../ContatctsComponnent/ContactComponnent';
import './ApresentationComponnent.css';

export default class ApresentationComponnent extends React.Component {
  render() {

    return (

      <div className={'info'} >
          <Logo />
          <Titles />
          <Contacts />
      </div>
    );
  }
}
      
