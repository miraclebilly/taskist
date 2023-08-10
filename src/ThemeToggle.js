import React, { useState, useEffect } from 'react'

const getThemeFromStorage = () => localStorage.getItem("theme")


export default function ThemeToggle () {
   const [theme, setTheme] = useState(getThemeFromStorage() || 'light');

   useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    // const setDark = () => {
    //     localStorage.setItem("theme", "dark");
    //     document.documentElement.setAttribute("data-theme", "dark");
    //   };
    
    //   const setLight = () => {
    //     localStorage.setItem("theme", "light");
    //     document.documentElement.setAttribute("data-theme", "light");
    //   };
    
    //   const storedTheme = localStorage.getItem("theme");
    
    //   const prefersLight = 
    //     window.matchMedia && 
    //     window.matchMedia("(prefers-color-scheme: light)").matches;
    
    //   const defaultLight = 
    //     storedTheme === "light" || (storedTheme === null && prefersLight );
    
    //   if(defaultLight){
    //     setLight();
    //   }
    
      const toggleTheme = (e) => {
        // if(e.target.checked) {
        //   setDark();
        //   setTheme("dark")
        // } else {
        //   setLight();
        //   setTheme("light")
        // }
        setTheme(e.target.checked ? "dark" : "light")
      };
    
    
    return(
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "dark" ? true : false}
                />
                <div className="slider round"></div>
            </label>
            <span>🌒</span>
        </div>
    )
}