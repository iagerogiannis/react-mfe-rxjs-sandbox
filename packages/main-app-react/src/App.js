import React, { useRef } from 'react';
import ContainerReactApp from './components/ContainerReactApp';
import ContainerVueApp from './components/ContainerVueApp';
import './app.css';
import Handlers from './components/Handlers';
import createCountContext from 'containerReact/countStore';


export default () => {
  const countReactStoreRef = useRef(createCountContext().countStore);
  const countVueStoreRef = useRef(createCountContext().countStore);

  return (
    <div className='main-app'>
      <h1>{'Main App (React)'}</h1>
      <ContainerReactApp countStore={countReactStoreRef.current} />
      <Handlers countStore={countReactStoreRef.current} />
      <ContainerVueApp countStore={countVueStoreRef.current} />
      <Handlers countStore={countVueStoreRef.current} />
    </div>
  );
};
