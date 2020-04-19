import React, { useContext } from 'react';
import { CalculatorContext} from "../contexts/CalculatorContext"

import "./Display.css"

const Display = () => {

    const {
        currentValue,
        previousValue,
        isDark,
        setIsDark
    } = useContext(CalculatorContext)

    return (
        <div className="display">
            <label for="toggle" className="switch">
                <input type="checkbox" value={isDark} onChange={e => setIsDark(e.target.checked)} id="toggle"/>
                    <div className="toggle-body">
                        <div className="indicator"></div>
                    </div>
            </label>
            <div className="previous">{previousValue}</div>
            <div className="current">{currentValue}</div>
        </div>
    );
}

export default Display;