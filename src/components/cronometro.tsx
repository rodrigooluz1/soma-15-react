import '../assets/css/cronometro.css'
import React from 'react'

export const Cronometro = ({paraCronometro, limite, statusTimeIsOver})=>{

    const [segundos, setSegundos] = React.useState(0)
    const [minutos, setMinutos] = React.useState(0)

    const verificaTimeIsOver = (p_minuto: number) => {
        if(p_minuto == limite){
            paraCronometro = true;
            statusTimeIsOver(true);
        }
    }

    const TimeCounter = () => {
       
        setTimeout(() => {
            if(!paraCronometro){
                setSegundos(segundos + 1)
                
                if(segundos === 59){
                    setSegundos(0)
                    setMinutos(minutos + 1);
                }  
            }              
        }, 1000);

        verificaTimeIsOver(minutos);
    }

    const formataTempo = (tempo: number) => {
        if(tempo < 10)
            return `0${tempo}`
        else
            return `${tempo}`
    }

    TimeCounter()

    return(
        <div className="container">
            <div className='cronometro'>
                {`${formataTempo(minutos)}:${formataTempo(segundos)}`}
            </div>
        </div>
       
    )
}
