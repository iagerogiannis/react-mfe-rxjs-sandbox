import React from 'react';
import CounterReactApp from './components/CounterReactApp';
import CounterVueApp from './components/CounterVueApp';
import './app.css';

const ContainerReactApp = ({ countStore }) => {
  return (
    <div className='container'>
      <h2>{'Container (React)'}</h2>
      <CounterReactApp countStore={countStore} />
      <CounterVueApp countStore={countStore} />
    </div>
  );
};

export default ContainerReactApp;
