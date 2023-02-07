import { Subject } from 'rxjs';

const createCountContext = () => {
  const subject = new Subject();

  const initialState = {
    count: 0
  };

  let state = initialState;

  const countStore = {
    initialState,
    subscribe: setState => subject.subscribe(setState),
    init: () => {
      state = { ...initialState };
      subject.next(state);
    },
    increment: () => {
      state = { count: state.count + 1 };
      subject.next(state);
    },
    decrement: () => {
      state = { count: state.count - 1 };
      subject.next(state);
    },
  };

  return { countStore };
}

export default createCountContext;
