import React, { useMemo } from 'react';
import ContainerReactApp from './components/ContainerReactApp';
import ContainerVueApp from './components/ContainerVueApp';
import './app.css';
import Handlers from './components/Handlers';
import createCountContext from 'containerReact/countStore';


export default () => {
  const countReactStore = useMemo(() => createCountContext().countStore, []);
  const countVueStore = useMemo(() => createCountContext().countStore, []);

  return (
    <div className='main-app'>
      <h1>{'Main App (React)'}</h1>
      <ContainerReactApp countStore={countReactStore} />
      <Handlers countStore={countReactStore} />
      <ContainerVueApp countStore={countVueStore} />
      <Handlers countStore={countVueStore} />
    </div>
  );
};
