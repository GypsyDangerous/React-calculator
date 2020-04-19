import React, { useContext, useCallback, useEffect, useRef } from 'react';
import "./Buttons.css"
import BackspaceIcon from '@material-ui/icons/Backspace'
import mathParser from "math-expression-evaluator"

import { CalculatorContext } from "../contexts/CalculatorContext"

const round = (x, n) => {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
}

const Buttons = () => {

    useEffect(() => {
        document.addEventListener("keydown", e => {
            const d = -1 * (48 - e.keyCode)
            if (d < 10 && d >= 0) {
                addDigit(d)
            } else if (e.keyCode === 8) {
                backSpace()
            }
        })
        return () => {
            document.removeEventListener("keydown")
        }
    }, [])
    
    const {
        setCurrentValue,
        setPreviousValue,
        currentValue
    } = useContext(CalculatorContext)

    const addDigit = (d => {

        const val = currentValue
        const symboltest = "/x-+"
        if (symboltest.split("").includes(d)){
            console.log(d)
            if(val.length <= 0 || symboltest.split("").includes(val[val.length-1])){
                return
            }
        }

        setCurrentValue(v => v+""+d)
    })

    const backSpace = useCallback(() => {
        setCurrentValue(v => ("" + v).slice(0, (""+v).length-1))
    },[setCurrentValue])

    const clearMemory = useCallback(() => {
        setCurrentValue("")
        setPreviousValue("")
    }, [setCurrentValue,setPreviousValue])

    const evaluate = useCallback(() => {
        setPreviousValue(currentValue)
        setCurrentValue("" + round(mathParser.eval(currentValue.replace(/x/g, "*")), 6))
    },[setPreviousValue, setCurrentValue, currentValue])

    

    return (
        <div className="button-box">
            <button onClick={clearMemory} className="div right">C</button>
            <button onClick={backSpace} className="div right"><BackspaceIcon/></button>
            <button onClick={() => addDigit("/100")} className="div right">%</button>
            <button onClick={() => addDigit("/")} className="div right" dangerouslySetInnerHTML={{
                __html: `&divide`
            }}></button>
            <button onClick={() => addDigit("7")} className="div">7</button>
            <button onClick={() => addDigit("8")} className="div">8</button>
            <button onClick={() => addDigit("9")} className="div">9</button>
            <button onClick={() => addDigit("x")} className="div right" dangerouslySetInnerHTML={{
                __html: `&times`
            }}></button>
            <button onClick={() => addDigit("4")} className="div">4</button>
            <button onClick={() => addDigit("5")} className="div">5</button>
            <button onClick={() => addDigit("6")} className="div">6</button>
            <button onClick={() => addDigit("-")} className="div right">-</button>
            <button onClick={() => addDigit("1")} className="div">1</button>
            <button onClick={() => addDigit("2")} className="div">2</button>
            <button onClick={() => addDigit("3")} className="div">3</button>
            <button onClick={() => addDigit("+")} className="div right">+</button>
            <button onClick={() => addDigit("0")} className="div double">0</button>
            <button onClick={() => addDigit(".")} className="div">.</button>
            <button onClick={evaluate} className="div right">=</button>
        </div>
    );
}

export default Buttons;
