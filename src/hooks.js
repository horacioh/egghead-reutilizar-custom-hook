import React from "react"

export function useUser() {
  const [user, setUser] = React.useState({
    firstName: "John",
    lastName: "Doe",
    email: "email@example.com",
    id: "123456",
  })

  return { user, setUser }
}
