import React, {createContext, useState, useEffect} from 'react'
import {User} from "@auth/core/types"

type UserType = {
  user: User
} | null

type UserProviderProps = {
  children: React.ReactNode,
  userFromServer: User | null
}

export const UserContext = createContext<[UserType, React.Dispatch<React.SetStateAction<UserType>>] | null>(null)


export const UserProvider: React.FC<UserProviderProps> = ({ children, userFromServer }) => {
  const [user, setUser] = useState<UserType>(null)

  useEffect(() => {
    if (userFromServer) {
      setUser({ user: userFromServer })
    }
  }, [userFromServer])

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
