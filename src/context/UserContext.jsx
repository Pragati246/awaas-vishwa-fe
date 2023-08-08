import React , { createContext , useState } from 'react'
export const UserContext =createContext({});

export const UserContextProvider = ({children}) => {
    const [userInfo , setUserInfo] = useState({});
  return (
    <UserContextProvider value = {{ userInfo, setUserInfo}}>
        {children}
    </UserContextProvider>
  )
}

