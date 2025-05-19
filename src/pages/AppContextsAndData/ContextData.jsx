
import { createContext, useState } from "react";

export const AppContext = createContext();

export function ContextProvider({ children }) {
    const [user, setUser] = useState('Parfait');

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
}
