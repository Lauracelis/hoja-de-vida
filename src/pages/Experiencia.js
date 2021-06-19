import React from 'react';
import styled from 'styled-components';
import '../App.css' 

const Div=styled.div`
.Title{
    font-family:"Vidaloka";
    color:#FDF8F8;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#323131;

}
.Aprendiz{
    float: left;
    width: 40%;
    border: steelblue solid 2px;
    justify-content:center;
    align-items:center;
    text align:center;
    padding:25px;
    margin:15px;

}
.Funciones{
    float: left;
    width: 45%;
    border: steelblue solid 2px;
    justify-content:center;
    align-items:center;
    text align:center;
    padding:25px;
    margin:45px;
    
}
`

const Experiencia = () => {
    return (
        <div style={{ 
            height:'90vh'}
    }>
       <Div className="container-padree">
       <div className="Title">        
       <h1>Experiencia</h1>
       </div>
        <div className="Aprendiz">
        <h4 color="#4D53C4">Aprendiz Estudios Clínicos</h4>
        <p color="#4D53C4">Productos Roche S.A</p>
        <p>Dic. 2019- Jun. 2020</p>
        </div>
        <div className="Funciones">
        <h3>FUNCIONES</h3>
        <p>Facilitar la comunicación y relacionamiento entre la organización con entidades del Estado como INVIMA e internamente con Comités de ética.</p>
        <p>Indexación de documentos en la plataforma eTMF en el idioma inglés provenientes de los centros de Investigación.</p> 
        <p>Dar apoyo operativo en la gestión de la legalización de gastos mensuales a través de la plataforma CONCUR.</p> 
        <p>Radicación y devolución de facturas de los centros de investigación.</p> 
        <p>Realizar la gestión de archivo de estudios clínicos.</p>
        </div>
        </Div>
        </div>
    )
}

export default Experiencia