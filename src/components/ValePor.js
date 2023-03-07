import React from 'react'

export const ValePor = ({ regalo, numero, codigo }) => {

    const hslToHex = (h, s, l) => {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    const generarColor = () => {
        let h = Math.floor(Math.random() * 360)
        let s = 84
        let l = 90

        return hslToHex(h, s, l)

    }

    const a = regalo == ""
    const b = regalo == "Felicidades Tienes Todos Tus Regalos"

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
