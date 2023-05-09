import React from "react";        /// Context step 1 
import { createContext } from "react";

const modeContext = createContext({    /// Context step 2 define the global states initial values 
    mode:true,
    toNightMode: () => { },
    toDayMode: () => { },
    changeMode:()=>{}

})




export default modeContext;