import React, { createContext, useContext, useState } from 'react'
import TVTuseContext1 from './TVTuseContext1';
export const themeContext = createContext();// tao ngu canh de chia se


export default function TVTuseContex() {
    // state 
    const[theme,setTheme] = useState('red');
    // ham thay dooi theme
    const TVTHandleChange = (toggle)=>{
        setTheme(theme=== 'red'?'blue':'red');
    }
  return (
    <themeContext.Provider value={theme}>
    <div className='alert'>
        <h2> Demo useContext</h2>
        <TVTuseContext1 />
        <button onclick={TVTHandleChange}>change bgcolor</button>
    </div>
    </themeContext.Provider>
  )
}