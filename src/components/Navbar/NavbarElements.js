import { FaBars } from 'react-icons/fa'; //Importación de iconos
import { NavLink as Link } from 'react-router-dom'; //importacion del link del menú
import styled from 'styled-components';//Importación de los estilos de los componentes

//Estilos de la sección del menú.
export const Nav =styled.nav`
background= #FDF8F8;
height:80px;
display:flex;
justify-content:space-between;
padding: 0.5rem calc(100vw- 1000px) /2);
z-index:10;
`;

//Estilos del link.
export const NavLink= styled(Link)`
color:#00000;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height:100%;
cursor:pointer;

//activación del texto cuando el usuario da clic
&.active{
    color: #00000;
}
`;
 
//Estilos de los iconos.
export const Bars = styled(FaBars)`
display:none;
color: black;

@media screen and (max-width:768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform traslated(-100%,75%);
    font-size: 1.8rem;
    cursor:pointer;
}
`;

//Estilos del  menú.
export const NavMenu = styled.div `
display:flex;
align-items:center;
margin-right:-24px;

@media screen and (max-width:768px){
    display:none;
}
`;

//Estilos de los botones.
export const NavBtn = styled.nav `
display:flex;
align-items:center;
margin-right:24px;

@media creen and (max-width:768px) {
    display:none;
}
`;

//Estilos del link de los botones.
export const NavBtnLink = styled(Link)`
border-radius:4px;
background: #FDF8F8;
padding:10px 22px;
color:red;
border:none;
outline:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:red;
    color: #00000;
}
`;