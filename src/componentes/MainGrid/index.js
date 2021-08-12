import styled from "styled-components";

const MainGrid = styled.main`
  grid-gap: 10px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  width: 100%;

  .perfil {
    display: none;
    @media screen and (min-width: 860px){
      display: block;  
    }
  }
  @media screen and (min-width: 860px){
    max-width:1110px;
    display:grid;
    grid-template-areas:
    "perfil bem-vindo comunidades";
    grid-template-columns: 160px 1fr 312px;    
  }
`
export default MainGrid;