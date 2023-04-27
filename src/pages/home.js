import Filmes from "../componentes/Filmes";
import Title from "../componentes/Title";

export default  function Home(){
    return(
        <div>
            <Title
                title={"Catálogo de Filmes"}/>
            <Filmes />
        </div>
    )
}