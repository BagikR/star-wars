import { createContext, useContext, useState } from "react";
import { changeCssVar } from "@services/changeCssVar";

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, ...props }) =>{
    const [theme, setTheme] = useState(null);

    const change = name =>{
        setTheme(name);
        changeCssVar(name);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
			{...props}
		>
            { children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)