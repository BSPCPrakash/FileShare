export const SIGN_IN = 'Signing In to Account';
export const SIGN_OUT = 'Signing Out of Account';

export const Reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return (state = true);
    }
    case SIGN_OUT: {
      return state;
    }
    default: {
      return state;
    }
  }
};
