import { createContext, useContext, useState } from "react";
import { accountMock, AccountType } from "./accountContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthType {
  email: string;
  password: string;
}

const AuthContext = createContext<{
  user: AccountType, 
  loginAction: () => void, 
  logOut: () => void, 
} | undefined>(undefined);
    

export function AuthProvider ({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    const [user, setUser] = useState<AccountType>({
        id: '',
        email: "",
        password: "",
        type: '',
        name: '',
        balance: 0,
        phone: '-'
    });
    
    const loginAction =  async () => {
        const response = accountMock;
        await AsyncStorage.setItem("biteBankId", response.id);
        
        setUser(response)
        return;
    };
  
    const logOut = async () => {
      setUser({
        id: '0',
        email: "",
        password: "",
        type: '',
        name: '',
        balance: 0,
        phone: '-'
    });
      await AsyncStorage.removeItem("biteBankId");
    };
  
    return (
      <AuthContext.Provider 
        value={{ 
            user, 
            loginAction, 
            logOut 
        }}>
        {children}
      </AuthContext.Provider>
    );
  
  };

export function useAuthProvider() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Invalid AuthContext");
  return context;
}
