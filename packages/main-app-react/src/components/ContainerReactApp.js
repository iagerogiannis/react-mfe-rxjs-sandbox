import React, { useRef, useEffect } from 'react';
import { mount } from 'containerReact/ContainerReactApp';

const ContainerReactApp = ({ countStore }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { countStore });
  }, []);

  return <div ref={ref} />;
};

export default ContainerReactApp;
