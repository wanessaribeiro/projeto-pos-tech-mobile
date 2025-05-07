import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

const NavContext = createContext<{
  option: string,
  setOption: Dispatch<SetStateAction<string>>,
} | undefined>(undefined);
    

export function NavProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [option, setOption] = useState('home');

  return (
    <NavContext.Provider
      value={{
        option,
        setOption,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavProvider() {
  const context = useContext(NavContext);
  if (!context) throw new Error("Invalid NavContext");
  return context;
}
