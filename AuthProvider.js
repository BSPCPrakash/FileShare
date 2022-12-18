import React, {useState} from 'react';

export const AuthContext = React.createContext();

export default AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState('');
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn,user,setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
