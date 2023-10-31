
import { Navigate, useNavigate } from "react-router-dom"
import '../assets/css/final.css'
import Saiu from '../assets/img/saiu.png'

export default function Encerrar(){
    const navigate = useNavigate();

    const jogar = () => {        
        window.location.reload()
    }

    const finalizar = () => {        
        navigate('/')
    }

    return (
        <>
            <div className="bgTransparent">                
            </div>
            <div className="bgAll">
                <div className="popUp">
                    <img src={Saiu}/>
                    <p className="p-btn">
                        <button onClick={finalizar} className="btn btn-finalizar">SAIR DO JOGO</button>
                        <button onClick={jogar} className="btn btn-jogar">JOGAR NOVAMENTE</button>
                    </p>
                </div>
            </div>
        </>
    )
}