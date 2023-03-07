import React from "react"
import congrats from "../img/congrats.png"

export const Terminado = ({ edad }) => {

    return (
        <div className="terminado">
            <img src={congrats} alt="Felicidades!" className="img2" />
            <p>Diploma Oficial por: <br /> Conseguir todos los vales</p>
            <p>Disfrute de su cumpleanos, y disfrute de sus <span className="numero">{edad}</span></p>
            <p style={{ fontSize: "15px" }}>Firmado: Isabella</p>
            <br></br>
        </div >
    )
}