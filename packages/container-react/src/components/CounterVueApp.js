import React, { useRef, useEffect } from 'react';
import { mount } from 'counterVue/CounterVueApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
