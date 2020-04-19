import React, {createContext, useState, useMemo} from "react"

export const CalculatorContext = createContext({})

export const CalculatorContextProvider = props => {

    const [currentValue, setCurrentValue] = useState("")
    const [previousValue, setPreviousValue] = useState("")
    const [isDark, setIsDark] = useState(false)

    const ProviderValue = useMemo(() => ({
        currentValue,
        setCurrentValue,
        previousValue,
        setPreviousValue,
        isDark,
        setIsDark
    }), [currentValue, setCurrentValue, previousValue, setPreviousValue, isDark, setIsDark])

    return (
        <CalculatorContext.Provider
            value={ProviderValue}
        >
            {props.children}
        </CalculatorContext.Provider>
    )
}