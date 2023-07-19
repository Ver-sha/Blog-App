import { createContext, useContext, useState } from 'react';
import Blog from '../../Components/Blog/Blog';

const AuthContext = createContext(null);

const initialTasks = {
  isAuth: false,
  email: '',
  name: ''
};
// const initialSearch = {
//   isSetSearch: false ,
// }

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [authStatus, setAuthStatus] = useState(initialTasks);
  // const [search, setSearch] = useState(initialSearch);

  
  const value = { authStatus, setAuthStatus }
  return (
    <AuthContext.Provider value={value}>
      {children}
      {/* <Blog /> */}
    </AuthContext.Provider>
  );
}
