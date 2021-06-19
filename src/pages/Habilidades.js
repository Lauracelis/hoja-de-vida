import React from 'react';
import styled from 'styled-components';
import '../App.css'
import HTML from '../Images/html.png'
import CSS from '../Images/css3.png'
import JS from '../Images/JavaScript.png'
import REACT from '../Images/React.png'
import GIT from '../Images/Git.png'

const Div=styled.div`
.html{
    border: 2px solid red;
    width:20%;
    heigth:50px;
    padding:10px;
    margin:75px;
    display:flex;
    align-content: space-around;
    float:right;
    align-items: center;
}

.html img{
    width:80%;

}
.css{
    border: 2px solid green;
    width:20%;
    padding:10px;
    margin:75px;
    display:flex;
    align-content: space-around;
    float:right;
    align-items: center;
}
.css img{
    width:80%;
}
.js{
    border: 2px solid yellow;
    width:20%;
    padding:10px;
    margin:75px;
    display:flex;
    align-content: space-around;
    float:right;
    align-items: center;
}
.js img{
    width:80%;
}
.react{
    border: 2px solid red;
    width:20%;
    padding:10px;
    margin:75px;
    display:flex;
    align-content: space-around;
    float:center;
    align-items: center;
}
.react img{
    width:80%;
    
}
.git{
    border: 2px solid green;
    width:20%;
    padding:10px;
    margin:75px;
    display:flex;
    align-content: space-around;
    float:right;
    align-items: center;
     
}
.git img{
    width:80%;
}
`

const Habilidades = () => {
    return (
        <div style={{ 
            height:'90vh'}
    }>
    <Div className="container-padre">
    <div className="titulo">
    <h1>Habilidades</h1>
    </div>
    <div className="html">
    <img src={HTML} alt="imagen3" /></div>
    <div className="css">
    <img src={CSS} alt="imagen3" /></div>
    <div className="js">
    <img src={JS} alt="imagen3" /></div>
    <div className="react">
    <img src={REACT} alt="imagen3" /></div>
    <div className="git">
    <img src={GIT} alt="imagen3" /></div>

   
   </Div> 
   </div>
    );
};







export default Habilidades