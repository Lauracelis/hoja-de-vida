import React from 'react' //Importación de react
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1 from  '../Images/colsubdidio.png';
import imagen2 from '../Images/sena.jpg';
import imagen3 from '../Images/kuepa.png';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

  const Div=styled.div`
  
  .Card{
    display:grid;
    border: 2px solid red;
    width:50px;
  }
  .CardImg{
    width:50px;
  }
  `



const Educacion = () => {
    return (
        <div style={{ 
            height:'80vh'
        }}>
        <CardDeck>
      <Card>
        <CardImg src={imagen1} alt="imagen1" />
        <CardBody>
          <CardTitle tag="h5">Bachillerato académico</CardTitle>
          <CardSubtitle tag="h6" >Colegio Colsubsidio Chicalá</CardSubtitle>
          <CardText> Enero 2016- Noviembre 2017</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg src={imagen2} alt="imagen2" />
        <CardBody>
          <CardTitle tag="h5">Tecnóloga en Negociación Internacional</CardTitle>
          <CardSubtitle tag="h6">Servicio Nacional de Aprendizaje
          SENA</CardSubtitle>
          <CardText>fecha</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg src={imagen3} alt="imagen3" />
        <CardBody>
          <CardTitle tag="h5">Técnico Laboral en Digitación y procesamiento de datos</CardTitle>
          <CardSubtitle tag="h6">Kuepa Edutech S.A.S</CardSubtitle>
          <CardText>Febrero 2021-Actualidad</CardText>
        </CardBody>
      </Card>
    </CardDeck>
        </div>
    )
}

export default Educacion