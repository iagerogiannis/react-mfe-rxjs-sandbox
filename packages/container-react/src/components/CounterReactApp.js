import React, { useRef, useEffect } from 'react';
import { mount } from 'counterReact/CounterReactApp';

export default ({ countStore }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { countStore });
  }, []);

  return <div ref={ref} />;
};
