import React from 'react'
import convert from 'color-convert/conversions';

export const ValePor = ({ regalo, numero, codigo }) => {

    const generarColor = () => {
        let h = Math.floor(Math.random() * 20 + 30)
        let s = 100
        let l = 80

        let rgb = convert.hsl.rgb([h, s, l])
        let hex = `#${convert.rgb.hex(rgb)}`
        return hex

    }

    const a = regalo == ""

    return (
        <div style={a ? { backgroundColor: "transparent" } : { backgroundColor: generarColor() }} className={"vale"}>

            <span className='numero valeNum'>{numero}</span>
            <p>VALE POR:</p>
            <span>——————————————————————</span>
            <p className='regalo'>{regalo}</p>
            <span>——————————————————————</span>
            <p>Código: {codigo}</p>

        </div >
    )
}
