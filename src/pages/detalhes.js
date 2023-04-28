import { useParams } from "react-router-dom";



function Detalhes() {


    const { id } = useParams()
    console.log(id)

    return (

        <h1>detalhes</h1>
    )

}

export default Detalhes;