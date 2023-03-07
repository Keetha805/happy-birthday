import React, { useState } from 'react';
import { ValePor } from './ValePor';
import { Terminado } from './Terminado';
import logo from '../img/happyB.jpg';
import cumpleanero from '../img/imgCumpleanero.jpeg';

export const Main = () => {

    const nombre = "Miara"
    const evento = "Feliz Cumpleaños"
    const edad = 17
    const regalos = [
        "Hacer Un Picnic",//0
        "Un Día De Pelis",
        "10 Maravillosos E Inigualables Céntimos (10MEIC)",
        "Una Videollamada Nocturna",
        "Un Regalaso",
        "Viaje En Cochesito",
        "Regalices negros",
        "Una Escapada",
        "Tu Comida Favorita",
        "Una Mega Tarde", //9
        "Irnos A Un Parque De Atracciones",
        "Algo Que Quieras",
        "Irnos A Cenar",
        "Your Workshit",
        "Elige Tu Vale ;)",
        "Un Anillo Facherito",
        "Irnos De Compras",
        "Te visito",//16
    ]


    const [mensaje, setMensaje] = useState(" ")
    const [numero, setNumero] = useState("")
    const [regalo, setRegalo] = useState("")
    const [numerosV, setNumerosV] = useState([])
    const [clickado, setClickado] = useState(false)
    const [codigo, setCodigo] = useState("Sin Código No Podrá Reclamar Su Regalo")

    const [mappeo, setMappeo] = useState(Array)


    const elegirRegalo = () => {
        let nuevoNumero = Math.round((Math.random() * (regalos.length - 1) + 1))
        let arrayTemp = numerosV
        setClickado(true)

        if (!arrayTemp.includes(nuevoNumero)) {
            elegirCodigo()
            setRegalo(regalos[nuevoNumero - 1])

            setNumero(nuevoNumero)
            setNumerosV(numerosV.concat(nuevoNumero))
            setMensaje("Has conseguido: ")

            setMappeo(mappeo.concat({ "cod": codigo, "reg": regalo }))
        }
        else {
            if (numerosV.length <= (edad - 1)) {
                elegirRegalo()
            }
            else {
                setMensaje("")
                setNumero("")
                setRegalo("Felicidades Ya Tienes Todos Tus Regalos")
            }
        }
    }

    const elegirCodigo = () => {
        let numeros = "0123456789"
        let nuevacodigo = ""
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * numeros.length)
            nuevacodigo += numeros[index]
        }

        setCodigo(nuevacodigo)

    }

    return (
        <div>
            <img src={logo} className="img" alt="fotito" />
            <h1>¡{evento.toUpperCase()} {nombre.toUpperCase()}!</h1>
            <div className={!clickado ? '' : 'none'}>
                <img className='imgCumpleanero' src={cumpleanero}></img>
                <div>
                    <p>Que onda panita? Al parecer es tu cumpleaños</p>
                    <p>Y como ya cumples {edad} añazos pues tienes {edad} regalos disponibles</p>
                    <p>Este año son vales para {edad} cosas aleatorias</p>
                    <p>Dale al botón de abajo para conseguirlos</p>
                    <p style={{ fontSize: "10px" }}>DISCLAIMER: No se sortean nudes</p>
                </div>
            </div>
            <div>
                <button onClick={elegirRegalo} className={mensaje == "" ? "button none" : "button"}>Elegir Regalo</button>
                <p>{mensaje}</p>
                <div className={mensaje == "" || mensaje == " " ? "none" : ""}>
                    <ValePor regalo={regalo} numero={numero} codigo={codigo} />
                </div>
                <div className={!clickado || mensaje !== "" ? 'none' : ''}>
                    <Terminado edad={edad} />
                    <div className='codigosToRegalos'>
                        {
                            mappeo.map((dic) => {
                                let cod = dic["cod"]
                                let reg = dic["reg"]
                                return (
                                    <p>{cod} : {reg}</p>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div >
    )
}
