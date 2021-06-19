import React from 'react'; //Importación de React.
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements'; //Importamos los elementos de la barra de navegación.

//Sección menú.
const Navbar = () => {
     //Se agregan las rutas de navegación.
    return (
        <>
            <Nav> 
              <NavLink to="/"> 
               <h1>CV</h1> 
              </NavLink>
              <Bars/>
              <NavMenu>
               <NavLink to="/Inicio" activeStyle>
               Inicio
               </NavLink>
               <NavLink to="/PerfilProfesional" activeStyle>
               Perfil Profesional
               </NavLink>
               <NavLink to="/Experiencia" activeStyle>
               Experiencia
               </NavLink>
               <NavLink to="/Educacion" activeStyle>
               Educacion
               </NavLink>
               <NavLink to="/Habilidades" activeStyle>
               Habilidades
               </NavLink>
               <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavMenu>
              {/*<NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>*/}
            </Nav>
            </>
        
    );
};

export default Navbar; //exportación predeterminada 

