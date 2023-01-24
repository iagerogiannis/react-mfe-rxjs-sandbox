import React from 'react';
import ContainerReactApp from './components/ContainerReactApp';
import ContainerVueApp from './components/ContainerVueApp';
import './app.css';
import Handlers from './components/Handlers';


export default () => {
  return (
    <div className='main-app'>
      <h1>{'Main App (React)'}</h1>
      <ContainerReactApp />
      <ContainerVueApp />
      <Handlers />
    </div>
  );
};
