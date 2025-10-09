import { useParams } from "react-router-dom"


export const User = () => {
    const {id} = useParams();

    return (
        <>

        {
            id == 1 ? <h1>Seja bem vindo Adm - ID {id} </h1> : <h1>Seja bem vindo Usuario ID {id} </h1>
    
        }
        
        </>
    )
}