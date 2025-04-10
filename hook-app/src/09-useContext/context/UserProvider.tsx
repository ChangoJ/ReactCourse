import { useState } from 'react';
import { UserContext } from './UserContext';

/* const user = {
    id: 123,
    name: 'Jordan',
    email: 'jordanchango@gmai.com'
} */

export const UserProvder = ({ children }:any) => {
  
    const [user, setUser] = useState()
  
    return (
    <UserContext.Provider value={{ user, setUser } }>
        {children}
    </UserContext.Provider>
  )
}
