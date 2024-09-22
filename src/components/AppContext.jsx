import React, { createContext, useState } from 'react'

export const ContextWrapper = createContext();

const AppContext = ({children}) => {


    const[appTheme,setTheme]=  useState(localStorage.getItem("appTheme"));

    const handleTheme =(val)=>{
        localStorage.setItem("appTheme",val)
      setTheme(val)
    }

    const values={
        appTheme,
        handleTheme
    }

  return (
    <ContextWrapper.Provider value={values}>
        {
            children
        }
    </ContextWrapper.Provider>
  )
}

export default AppContext
