import React from 'react'
import styled from 'styled-components';
import '../App.css' 


const Div=styled.div`
.titulo h1{
    color:#FDF8F8;
    font-family:"Vidaloka";
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 100px;
    padding: 10px;
    font-size:45px;
    background: rgb(77,83,196);
    background: linear-gradient(0deg, rgba(77,83,196,0.6867121848739496) 0%, rgba(77,80,136,0.9668242296918768) 100%);
   

}
.info{
    color:#323131;
    border: 2px solid #4D53C4;
    justify-content:center;
    padding:10px;
    margin:75px;
    font-size:30px;
    ailgn-items:justify;
    
    
}
`

const PerfilProfesional = () => {
    return (
        <div style={{
            height:'90vh'}
    }>
        <Div className="container-padre">
        <div className="titulo">
        <h1>PERFIL PROFESIONAL</h1>
        </div>
        <div className="info">
        <p>Estudiante de Desarrollo web enfocado en el Front-End, cursando el cuarto módulo de cinco, con conocimiento en HTML5, CSS3, JavaScript y frameworks como Boostrap. Apasionada por el diseño y los retos que implican innovación.</p>
        <p>Mi objetivo principal es vincularme a una empresa que me dé la oportunidad de iniciar mi crecimiento profesional y ser parte de un equipo de trabajo dinámico.</p>
        </div>
        </Div>

        </div>
      
    )
    
}

export default PerfilProfesional
