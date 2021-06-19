import React from 'react';
import styled from 'styled-components';
import circulos from '../Images/circulos.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';


const Div=styled.div`

.container img{
    position:absolute;
    float: right;
    justify-content:right;
}
.Nombre{
    font-family:"vidaloka";
    justify-content:Center;
    margin: .5em 0;
    text-align: right;
}
.Nombre h2{
    font-size:70px;
    text-align:center;
}
.Nombre h3,h4{
    font-size:40px;
    text-align:Center;
    

}
`

const Inicio = () => {
    return (
         <div style={{
            display: 'flex', 
            justifyContent:'center',
            alignItems:'center', 
            height:'90vh'}
    }>
    <Div className="container">
    <img src={circulos} alt="circulo"/>
    <div className="Nombre">
    <h2>Laura Tatiana Celis Ballesteros</h2>
    <h3>Desarrolladora web</h3>
    <h4>Front-end</h4>
    </div>
    <div className="contacto">
    <i class="fas fa-envelope">lauracelis436@gmail.com</i>
    <br></br><i class="fa fa-camera-retro fa-lg">3213521419</i>
    <i class="fa fa-camera-retro fa-lg">calle 42B #72H sur</i>
    </div>
    
    </Div>
            <h1></h1>
        </div>
    )

}



export default  Inicio


