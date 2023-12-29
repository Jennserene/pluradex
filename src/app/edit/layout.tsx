import React from "react"
import {getLoggedInSession} from "@/utilities/auth"

const EditLayout = async ({children}: { children: React.ReactNode }) => {
  const session = await getLoggedInSession()
  console.log(session.user)
  return (
        <div>
            {children}
        </div>
    )
}

export default EditLayout