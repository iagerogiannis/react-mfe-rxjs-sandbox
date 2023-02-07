import React, { useRef, useEffect } from 'react';
import { mount } from 'containerVue/ContainerVueApp';

const CountainerVueApp = ({ countStore }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { countStore });
  }, []);

  return <div ref={ref} />;
};

export default CountainerVueApp;
