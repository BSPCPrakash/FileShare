export const SIGN_IN = 'Signing In to Account';
export const SIGN_OUT = 'Signing Out of Account';
export const signIn = data => ({
  type: SIGN_IN,
  payload: data,
});
export const signOut = data => ({
  type: SIGN_OUT,
  payload: data,
});
