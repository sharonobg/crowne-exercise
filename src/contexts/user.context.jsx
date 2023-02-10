import{createContext, useState} from 'react';
//actual value you want to access 
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});
//actual functional component that receives children
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
<UserProvider>
    <app />
</UserProvider>