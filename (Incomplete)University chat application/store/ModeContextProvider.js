import React, { useState } from "react";
import modeContext from "./mode-Context";     /// Context step 3 





const ModeContextProvider = props => {
   
    const [themeMode, setThemeMode]= useState(true)
    

    const modeChangeHandler = () => {
        setThemeMode(()=>!themeMode)
        // setThemeMode(false)
        console.log(themeMode)
        
    }
    const toNightModeHandler = () => {
        setThemeMode(false)
    }
    const toDayModeHandler = () => { setThemeMode(true) }
    

    const contextOfMode = {    
        mode: themeMode,
        toNightMode: toNightModeHandler,
        toDayMode: toDayModeHandler,
        changeMode:modeChangeHandler
      }

  return (    
    <modeContext.Provider value={contextOfMode}>
        {props.children}
    </modeContext.Provider>
  );
};

export default ModeContextProvider;    /// Context step 6
