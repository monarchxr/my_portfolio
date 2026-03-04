"use client"
import { useState, useEffect } from "react"

export default function ThemeProvider({children}: {children: React.ReactNode}){
    const [theme, setTheme] = useState("dark")

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return(
        <div>
            <button 
                className="fixed top-4 right-4 z-50 cursor-pointer"
                onClick={() => setTheme(theme==="dark"? "light":"dark")}>
                {theme==="dark"? "🔆":"🌙"}
            </button>
            {children}
        </div>
    )
}