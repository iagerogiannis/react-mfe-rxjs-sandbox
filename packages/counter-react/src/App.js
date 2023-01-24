import React, { useEffect, useState } from 'react';
import countStore from 'containerReact/countStore';

export default () => {
  const [countState, setCountState] = useState(countStore.initialState);

  useEffect(() => {
    const subscription = countStore.subscribe(setCountState);
    countStore.init();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <p>{`React Counter: ${countState.count}`}</p>
  );
};
