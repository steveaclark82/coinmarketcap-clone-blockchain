import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({children}) => {

    return(
        <CoinMarketContext.Provider
        value ={{
            
        }}
        >
            {children}
        </CoinMarketContext.Provider>
    )
}