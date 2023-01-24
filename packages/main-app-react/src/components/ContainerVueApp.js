import React, { useRef, useEffect } from 'react';
import { mount } from 'containerVue/ContainerVueApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
