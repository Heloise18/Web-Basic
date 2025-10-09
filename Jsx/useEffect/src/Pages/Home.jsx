import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>Pagina inicial</h1>
            <Link to={'/sobre'}>Navegar </Link> 
        </>
    )
    
}