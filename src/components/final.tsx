
import { Navigate, useNavigate } from "react-router-dom"
import '../assets/css/final.css'
import Parabens from '../assets/img/parabens.png'

export default function Final(){
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
                    <img src={Parabens}/>
                    <p className="p-btn">
                        <button onClick={finalizar} className="btn btn-finalizar">FINALIZAR</button>
                        <button onClick={jogar} className="btn btn-jogar">JOGAR NOVAMENTE</button>
                    </p>
                </div>
            </div>
        </>
    )
}