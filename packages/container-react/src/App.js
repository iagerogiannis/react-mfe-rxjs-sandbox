import React from 'react';
import CounterReactApp from './components/CounterReactApp';
import CounterVueApp from './components/CounterVueApp';
import './app.css';


export default () => {
  return (
    <div className='container'>
      <h1>{'Container (React)'}</h1>
      <CounterReactApp />
      <CounterVueApp />
    </div>
  );
};
