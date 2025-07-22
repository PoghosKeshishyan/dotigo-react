import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const lang = localStorage.getItem('lang') || 'en';

    useEffect(() => {
        localStorage.setItem('lang', 'en');
    }, [])

    return (
        <LanguageContext.Provider value={{ lang }}>
            {children}
        </LanguageContext.Provider>
    );
}