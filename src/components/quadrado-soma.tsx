
import { useState, useEffect } from 'react';
import '../assets/css/quadrado-soma.css'
import { Cronometro } from './cronometro'
import Final from './final';
import Encerrar from './encerrar';

export function QuadradoSoma(){

    const tempoLimite = 5;
    const [encerrarJogo, setEncerrarJogo] = useState(false)
    const [finalizouSoma, setFinalizouSoma] = useState(false)
    const [primeiroNumero, setPrimeiroNumero] = useState(true);
    const [timeIsOver, setTimeIsOver] = useState(false);

    const verificaTimeIsOver = (value:boolean) => {
        setTimeIsOver(value);
    }


    const [numeroSelecionado, setNumeroSelecionado] = useState({id: 0, value: 0, order:0, selected: false});    

    const numeros = [{id: 1, value: 1, order: 1, selected: false}, 
        {id: 2, value: 2, order: 2, selected: false},
        {id: 3, value: 3, order: 3, selected: false},
        {id: 4, value: 4, order: 4, selected: false},
        {id: 5, value: 5, order: 5, selected: false},
        {id: 6, value: 6, order: 6, selected: false},
        {id: 7, value: 7, order: 7, selected: false},
        {id: 8, value: 8, order: 8, selected: false},
        {id: 9, value: 9, order: 9, selected: false},];

    const [listaNumeros, setListaNumeros] = useState(numeros);      
    

    useEffect(() => {        
        verificaSoma();
        setPrimeiroNumero(true);
      }, [listaNumeros]); 
    
    const sairDoJogo = () => {
        setEncerrarJogo(true);
    }
    
    const selecionaNumero = (item, indice) => {
        
        item.selected = true         

        if(primeiroNumero){ 
            setNumeroSelecionado({...numeroSelecionado, id: item.id, value: item.value, order: item.order, selected: true});
            setPrimeiroNumero(false)
        }else{          
            
            if(item.id === numeroSelecionado.id)
                return false;

            let newOrder = numeroSelecionado.order
            numeroSelecionado.order = item.order
            numeroSelecionado.selected = false
 
            
            listaNumeros[indice] = {id: item.id, value: item.value, order: newOrder, selected: false}

            let listaAtualizada = listaNumeros.filter((elemento) => elemento.id !== item.id && elemento.id !== numeroSelecionado.id);
            

           setListaNumeros([...listaAtualizada, listaNumeros[indice], numeroSelecionado]);

        }
         

      };

      const verificaSoma = async () => {
 
        let linha1 = 0
        let linha2 = 0
        let linha3 = 0

        let coluna1 = 0
        let coluna2 = 0
        let coluna3 = 0

        let diagonal1 = 0
        let diagonal2 = 0

        
        listaNumeros.filter((n) => n.order <= 3).forEach((item)=>{
            linha1 = linha1 + item.value
        })
        listaNumeros.filter((n) => n.order >= 4 && n.order <= 6).forEach((item)=>{
            linha2 = linha2 + item.value
        })
        listaNumeros.filter((n) => n.order >= 7).forEach((item)=>{
            linha3 = linha3 + item.value
        })

        listaNumeros.filter((n) => n.order === 1 || n.order === 4 || n.order === 7).forEach((item)=>{
            coluna1 = coluna1 + item.value
        })
        listaNumeros.filter((n) => n.order === 2 || n.order === 5 || n.order === 8).forEach((item)=>{
            coluna2 = coluna2 + item.value
        })
        listaNumeros.filter((n) =>n.order === 3 || n.order === 6 || n.order === 9).forEach((item)=>{
            coluna3 = coluna3 + item.value
        })

        listaNumeros.filter((n) =>n.order === 1 || n.order === 5 || n.order === 9).forEach((item)=>{
            diagonal1 = diagonal1 + item.value
        })
        listaNumeros.filter((n) =>n.order === 3 || n.order === 5 || n.order === 7).forEach((item)=>{
            diagonal2 = diagonal2 + item.value
        })


        console.log(`soma linha 1 = ${linha1}`)
        console.log(`soma linha 2 = ${linha2}`)
        console.log(`soma linha 3 = ${linha3}`)

        console.log(`soma coluna 1 = ${coluna1}`)
        console.log(`soma coluna 2 = ${coluna2}`)
        console.log(`soma coluna 3 = ${coluna3}`)
        
        console.log(`soma diagonal 1 = ${diagonal1}`)
        console.log(`soma diagonal 2 = ${diagonal2}`)


        if(linha1 === 15 && linha2 === 15 && linha3 === 15 && coluna1 === 15 && coluna2 === 15 && coluna3 === 15 && diagonal1 === 15 && diagonal2=== 15){
            await setFinalizouSoma(true);            
        }

        
      }

       return (
        <>

            {finalizouSoma && <Final />}

            {(encerrarJogo || timeIsOver) && <Encerrar />}

            <Cronometro paraCronometro={finalizouSoma || encerrarJogo} limite={tempoLimite} statusTimeIsOver={verificaTimeIsOver} />
        
            <div className='tabuleiro'>

                {listaNumeros.sort((a, b) => a.order > b.order ? 1 : -1).map((item, index) => {
                    return(                    
                        <div className={item.selected ? 'itemNumero selected' : 'itemNumero'} key={index} onClick={() => selecionaNumero(item)}>{item.value}</div> 
                    );
                })}
            </div>  

            <div className='btnSairArea'>
                <button className='btnSair' onClick={()=> sairDoJogo()}>SAIR</button>
            </div>
            
                
        </>  
    );    
}