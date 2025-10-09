import { useParams } from "react-router-dom"

export const Catalogo = () => {
    const {Produto} = useParams();
    const {categoria} = useParams();
    
    return (
        <>
            <h1> Catalogo: </h1>
            <h2></h2>

        </>
    )
    
}