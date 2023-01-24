import React from 'react';
import CounterReactApp from './components/CounterReactApp';
import CounterVueApp from './components/CounterVueApp';
import './app.css';


export default () => {
  return (
    <div className='container'>
      <h2>{'Container (React)'}</h2>
      <CounterReactApp />
      <CounterVueApp />
    </div>
  );
};
