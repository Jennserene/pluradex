import { useContext, useEffect } from 'react'
import {UserContext} from "@/components/context/userContext"
import {redirect} from "next/navigation"

type UseUserOptions = {
  redirectTo?: string
  redirectIfFound?: boolean
}

export const useUser = ({ redirectTo = '', redirectIfFound = false }: UseUserOptions = {}) => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  const [user] = context

  useEffect(() => {
    if (!redirectTo) return
    if (!user && redirectTo) redirect(redirectTo)
    if (user && redirectIfFound) redirect(redirectTo)
  }, [user, redirectTo, redirectIfFound])

  return context
}
