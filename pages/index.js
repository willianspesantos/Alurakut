import MainGrid from "../src/componentes/MainGrid";
import Box from "../src/componentes/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakuComuns";
import { ProfileRelationsBoxWrapper } from "../src/componentes/ProfileRelations";

function PerfilSideBar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.usuario}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const usuario = "willianspesantos";
  const pessoasFavoritas = [
    "rafaballerini",
    "maykbrito",
    "omariosouto",
    "icarlosrigoni",
    "glaubermarcelino",
    "juunegreiros",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div style={{ gridArea: "perfil" }} className="perfil">
          <PerfilSideBar usuario={usuario} />
        </div>
        <div style={{ gridArea: "bem-vindo" }} className="bem-vindo">
          <Box>
            <h1 className="titulo">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div style={{ gridArea: "comunidades" }} className="comunidades">
          <ProfileRelationsBoxWrapper>
            <h2 className="tituloPequeno">Meus Amigos ({pessoasFavoritas.length})</h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return(
                  <li>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https:github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li> 
              )})
            }
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            <h2 className="tituloPequeno">Minhas Comunidades</h2>
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
