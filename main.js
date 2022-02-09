'use strict'

const lampada = document.getElementById('lampada')
const desligar = document.getElementById('desligar')
const ligar = document.getElementById('ligar')
const piscar = document.getElementById('piscar')
let idPiscar = null;

const lampadaQuebrada = () =>{

    return lampada.scroll.includes('quebrada')

}

const desligarLampada = () => {

    if(!lampadaQuebrada())
    lampada.src = './img/desligada.jpg'

}

const ligarLampada = () =>{

    if(!lampadaQuebrada())
    lampada.src = './img/ligada.png'

}

const quebrarLampada = () =>{

    lampada.src = './img/quebrada.jpg'
}

const lampadaDesligada = () =>{

    return lampada.src.includes('desligada')

}

const ligarDesligar = () =>{

    if(!lampadaDesligada()){
        ligarLampada()
    } else {

        desligarLampada
    }
}

const piscarLampada = () => {

    if(idPiscar == null){

        idPiscar = setInterval(ligarDesligar, 500)
        piscar.textContent = 'piscar' 
    } else {

            clearInterval(idPiscar)
            piscar.textContent = "piscar"
            idPiscar = null
    }
   
   
}



ligar.addEventListener('click', ligarLampada)
desligar.addEventListener('click', desligarLampada)
lampada.addEventListener('dblclick', quebrarLampada)
piscar.addEventListener('click', piscarLampada)
