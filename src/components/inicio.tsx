
import { useNavigate } from "react-router-dom";
import '../assets/css/inicio.css';
import  logo from '../assets/img/logo.png';


export default function Inicio(){

    const navigate = useNavigate();

    const iniciaJogo = () => {        
        navigate('/QuadradoSoma')
    }

    return(
        <>
        <div className="content">
            <div className="box-content">
            
                <img src={logo} className="logo" />

                <p>
                    Objetivo: o jogador precisa organizar as peças no tabuleiro de forma que todas as linhas horizontais, verticais e diagonais, somem 15. 
                </p>
                <p>
                    Como jogar: Clique no número que deseja mover e depois clique no número que será substituído para trocar a peça de lugar.
                </p>
                <p>
                    Tempo Limite: 5 minutos.
                </p>
                <button onClick={iniciaJogo} className="btn-jogar">JOGAR</button>
            </div>
        </div>
        </>
    )
}